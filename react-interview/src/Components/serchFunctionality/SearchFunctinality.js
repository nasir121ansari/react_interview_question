import React, { useState } from 'react'

const SearchFunctinality = (e) => {
    const [search, setSearch] = useState('')
    const [suggestions, setSuggestions] = useState([]);
    const [selectedValue, setSeletedValue] = useState([])


    const handleOnchane = async (e) => {
        const value = e.target.value
        setSearch(value)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const filtered = data.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()))
            setSuggestions(filtered)
        } catch (error) {
            console.log(error)
        }
    }

    const hanldeSelect = (sleected) => {
        setSeletedValue([...selectedValue, sleected])
        setSuggestions(suggestions.filter(user => user.name !== sleected));
        setSearch('')

    }
    const handleremove = (items) => {
        setSeletedValue(selectedValue.filter((item) => item !== items))
    }
    

    return (
        <div className='item-list-container'>
            <div className="chipInputContainer">
                <div className="chip-container">
                    {
                        selectedValue && (
                            selectedValue.map((itme, index) => {
                                return (
                                    <div key={index} className="chip">
                                        {itme} <span onClick={() => handleremove(itme)}>X</span>
                                    </div>
                                )
                            })
                        )
                    }
                    
                </div>
                <input type="text" value={search} onChange={(e) => handleOnchane(e)} />
            </div>
            <ul className="suggestion-list">
                {
                    suggestions.map((res, index) => {
                        return (
                            <li key={index} onClick={() => hanldeSelect(res.name)}>{res.name}</li>
                        )
                    })
                }
            </ul>


        </div>
    )
}

export default SearchFunctinality