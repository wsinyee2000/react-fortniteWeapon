import React, { useState, useContext } from 'react';
import "./ShowWeapons.css";
import WeaponListHeader from './WeaponListHeader';
import WeaponList from './WeaponList';
import { WeaponContext } from './WeaponContext';
import { HeaderContext } from './HeaderContext';


let handleSort_defaultValue = "DEFAULT";
let depandant = 'id';
let max = 1;
let min = -1;
const rarlyOrder = ["common", "uncommon", "rare", "epic", "legendary", "mythic", "transcendent"];
let finalDisplay = [];

function ShowWeapons() {

    let [rarityPattern, setRarityPattern] = useState([]);
    let [typePattern, setTypePattern] = useState([]);
    let [option, setOption] = useState('');

    // find a suitable case
    if (finalDisplay.length !== 0 && rarityPattern.length === 0) {
        option = 'lastResult';
    } else if (rarityPattern.length === 0) {
        option = 'noPattern';
    } else if (depandant === "rarity") {
        option = 'hasPattern_rarity';
    } else if (depandant === "id" || depandant === "name" || depandant === "type") {
        option = 'hasPattern_ID_Name_Type';
    } else if (depandant !== null) {
        option = 'hasPattern_else';
    }




    // Get the weapons and filter List from Contexts
    const [allWeapons, setAllWeapons] = useContext(WeaponContext)
    const [filterList, setFilterList] = useContext(HeaderContext);

    //Use for the Filter
    const filterHandler = e => {
        //the image(direction) of the filter Header
        if (e.target.id === 'header_direction') {
            if (max === 1) {
                max = -1;
                min = 1;
                rarlyOrder.reverse();
            } else {
                max = 1;
                min = -1;
                rarlyOrder.reverse();
                
            }
        }


        let new_rpattern = [];
        let new_tpattern = [];

        //change checkbox 'check' in the state between true and false
        if (e.target.id !== 'sort_option') {
            const checkedFilterID = e.target.id
            filterList
                .filter(e => e.id === checkedFilterID)
                .forEach(filter => {
                    filter.checked = (filter.checked === true) ? false : true
                });
            //change the default Value of the dropdown list
        } else if (e.target.id === 'sort_option') {
            handleSort_defaultValue = e.target.value;
            depandant = e.target.value;
        }

        //save the selected rarity in filter
        filterList
            .filter(allFilter => (allFilter.type === 'rarity' && allFilter.checked === true))
            .map(rarityFilter => new_rpattern.push(rarityFilter.value))
        //save the selected type in filter
        filterList
            .filter(allFilter => (allFilter.type === 'type' && allFilter.checked === true))
            .map(typeFilter => new_tpattern.push(typeFilter.value))

        setRarityPattern(new_rpattern);
        setTypePattern(new_tpattern);

    }

    //it use for display the list
    function DisplayResult(option) {

        switch (option) {
            case 'lastResult':
                return finalDisplay.map((weapon) =>
                    <WeaponList key={weapon.id} weapon={weapon} />
                );

            case 'noPattern':
                return allWeapons.map((weapon) =>
                    <WeaponList key={weapon.id} weapon={weapon} />);

            case 'hasPattern_rarity':
                // return rarityPattern
                //     .map(r =>
                //         typePattern.map(t =>
                //             allWeapons.filter(weapon => (weapon.rarity === r && weapon.type === t))

                //                 .map((weapon) =>
                //                     <WeaponList key={weapon.id} weapon={weapon} />
                //                 )));

                finalDisplay = [];
                allWeapons.map(weapon => {
                    rarityPattern.map(r => {
                        typePattern.map(t => {
                            if (weapon.rarity === r && weapon.type === t) {
                                finalDisplay.push(weapon);
                            }
                        })
                    })
                })

                finalDisplay.sort((a, b) => {
                    return rarlyOrder.indexOf(a[depandant]) - rarlyOrder.indexOf(b[depandant])
                })
                return finalDisplay.map((weapon) =>
                    <WeaponList key={weapon.id} weapon={weapon} />
                )

            case 'hasPattern_ID_Name_Type':
                finalDisplay = [];
                allWeapons.map(weapon => {
                    rarityPattern.map(r => {
                        typePattern.map(t => {
                            if (weapon.rarity === r && weapon.type === t) {
                                finalDisplay.push(weapon);
                            }
                        })
                    })
                })

                finalDisplay = finalDisplay.sort((a, b) => (
                    a[depandant] > b[depandant] ? max : min
                ));

                return finalDisplay.map((weapon) =>
                    <WeaponList key={weapon.id} weapon={weapon} />
                )

            case 'hasPattern_else':
                finalDisplay = [];
                allWeapons.map(weapon => {
                    rarityPattern.map(r => {
                        typePattern.map(t => {
                            if (weapon.rarity === r && weapon.type === t) {
                                finalDisplay.push(weapon);
                            }
                        })
                    })
                })
                finalDisplay = finalDisplay.sort((a, b) => (
                    a['mainStats'][depandant] > b['mainStats'][depandant] ? max : min
                ))
                return finalDisplay.map((weapon) =>
                    <WeaponList key={weapon.id} weapon={weapon} />
                );
        }
    }


    return (
        <div className='weapon_list'>
            <WeaponListHeader filterHandler={filterHandler} handleSort_defaultValue={handleSort_defaultValue} />
            {DisplayResult(option)}
        </div>
    )
}

export default ShowWeapons
