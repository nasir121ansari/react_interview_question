import React, { useState } from 'react'

export const DynamicDropDwon = () => {
    const [selectedParent, setSelectedParent] = useState('');
    const [selecteChild, setSelectedChild] = useState('');
    const data = {
        c1: ['c1-child1', 'c1-child2', 'c1-child3'],
        c2: [],
        c3: ['c3-child1', 'c3-child2']
    };


    const handleParentChange = (e) => {
        setSelectedParent(e.target.value);
        setSelectedChild('')
    }
    const handleChildChange = (event) => {
        setSelectedChild(event.target.value);
    };
    return (
        <div>

            <div>
                <label>Parent DropDwon</label>
                <select value={selectedParent} onChange={handleParentChange}>
                    <option value="">Select option</option>
                    {
                        Object.keys(data).map((key) => {
                            return (
                                <option value={key} key={key}>
                                    {key}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            {selectedParent && data[selectedParent].length > 0 && (
                <div>
                    <label htmlFor="child-dropdown">Child Dropdown: </label>
                    <select value={selecteChild} onChange={handleChildChange}>
                        <option value="">Select an option</option>
                        {data[selectedParent].map((child, index) => (
                            <option key={index} value={child}>
                                {child}
                            </option>
                        ))}
                    </select>
                </div>
            )}

        </div>
    )
}

