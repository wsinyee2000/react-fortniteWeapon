import React from 'react'

function FilterCheckbox({ id, name, value, checked, filterHandler }) {
    return (
        <>
            <label className="container" >{name} 
                <input id={id} type="checkbox" value={value} defaultChecked={checked} onClick={filterHandler}/>
            </label>
        </>
    )
}

export default FilterCheckbox
