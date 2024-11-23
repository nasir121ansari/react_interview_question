import React, { useState } from 'react'
const DynamicDropDwon = () => {
    const data = {
        India: {
            Delhi: ['New Delhi', 'Rohini', 'Dwarka'],
            Maharashtra: ['Mumbai', 'Pune', 'Nagpur']
        },
        USA: {
            California: ['Los Angeles', 'San Francisco', 'San Diego'],
            Texas: ['Houston', 'Austin', 'Dallas']
        }
    };
    const [selectedCounrty, setSelectedCounrty] = useState(null)
    const [selectedState, setSelectedState] = useState(null)
    const handleCountryChange = (e) => {
        setSelectedCounrty(e.target.value)
        setSelectedState(null)
    }
    const handleStateChange = (e) => {
        setSelectedState(e.target.value)
    }
    return (
        <div>
            <select onChange={handleCountryChange}>
                <option>Select</option>
                {
                    Object.keys(data).map((country) => {
                        return (
                            <option key={country} value={country}>{country}</option>
                        )
                    })
                }

            </select>
            {
                selectedCounrty && (
                    <select onChange={handleStateChange}>
                        <option>Select</option>
                        {
                            Object.keys(data[selectedCounrty]).map((state) => {
                                return (
                                    <option key={state} value={state}>{state}</option>
                                )
                            })
                        }

                    </select>
                )
            }
            {
                selectedState && (
                    <select >
                        <option>Select</option>
                        {
                            data[selectedCounrty][selectedState].map((city) => {
                                return (
                                    <option key={city} value={city}>{city}</option>
                                )
                            })
                        }

                    </select>
                )
            }
        </div>
    )
}


export default DynamicDropDwon

