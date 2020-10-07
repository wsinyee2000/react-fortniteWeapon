import React, { useState, useContext } from 'react';
import FilterCheckbox from './FilterCheckbox';
import "./WeaponListHeader.css";
import { HeaderContext } from './HeaderContext';


// let handleSort_defaultValue = "DEFAULT";

function WeaponListHeader({ filterHandler, handleSort_defaultValue }) {
    

    const [filterList, setFilterList] =useContext(HeaderContext);

 



    return (
        <>
            <nav className="Weapon_List_Header">

                {/* sort drop down list - id, name, rarly, Dmg, Firing rate, clipSize, Reload time, Bullet Per Catridge, Spread, Spread Downsights, Damage Zone Critical */}
                <div className="sort_list">
                    <label htmlFor="sort_option">Sort Options:</label>
                    <select name="sort_option" id="sort_option"  defaultValue={handleSort_defaultValue} onChange={filterHandler}>
                        <option value="DEFAULT" disabled>Choose a salutation ...</option>
                        <option value="id" defaultValue="selected">ID</option>
                        <option value="name">Name</option>
                        <option value="rarity">Rarly</option>
                        <option value="type">Type</option>
                        <option value="DmgPB">DmgPB</option>
                        <option value="FiringRate">Firing Rate</option>
                        <option value="ClipSize">Clip Size</option>
                        <option value="ReloadTime">Reload Time</option>
                        <option value="BulletsPerCartridge">Bullets Per Cartridge</option>
                        <option value="Spread">Spread</option>
                        <option value="SpreadDownsights">Spread Downsights</option>
                        <option value="DamageZone_Critical">Damage Zone Critical</option>
                    </select>

                </div>

                {/* rarity filter drop down list */}
                <div className="rarity_filter_list">
                    <h2>Rarity:</h2>
                    {filterList
                        .filter(e => e.type === "rarity")
                        .map((filter) =>
                            <FilterCheckbox 
                            key={filter.id} 
                            id={filter.id} 
                            name={filter.name} 
                            value={filter.value} 
                            checked={filter.checked} 
                            filterHandler={filterHandler}
                           
                            />
                        )}

                </div>

                {/* type filter drop down list */}
                <div className="type_filter_list">
                    <h2>Type:</h2>
                    {filterList
                        .filter(e => e.type === "type")
                        .map((filter) =>
                            <FilterCheckbox key={filter.id} 
                            id={filter.id} 
                            name={filter.name} 
                            value={filter.value} 
                            checked={filter.checked} 
                            filterHandler ={filterHandler}
                           />
                        )}


                </div>


                {/* button change direaction */}
                <img id='header_direction' src='/ascending.png'  alt='ascending' onClick={filterHandler}/>
                    



            </nav>
        </>
    )
}

export default WeaponListHeader
