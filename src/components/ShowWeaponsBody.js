import React, { useState, useContext, useRef, useEffect, createRows} from 'react';
import "./ShowWeapons.css";
import { WeaponContext } from './WeaponContext';
import WeaponList from './WeaponList';
import WeaponListHeader from './WeaponListHeader';
import { HeaderContext } from './HeaderContext';



let depandant = 'id'
const ShowWeapons = ({allWeapons}) => {
    window.scrollTo(0, 0);

    

    let [weapons, setWeapons] = useState([]);
    const [forceRerender, setForceRerender] = useState(1);
    const [filterList, setFilterList] = useContext(HeaderContext);
    let tempFilterWeapons = [];
    let origWeapons = [];
     origWeapons = origWeapons.concat(allWeapons);
    
     


    console.log(allWeapons);
    console.log(weapons);
    console.log(origWeapons);
    

    


    //Change sort
    const handleSort =
        e => {

            depandant = e.target.value;

            if (depandant === "rarity") {
                const rarlyOrder = ["common", "uncommon", "rare", "epic", "legendary", "mythic", "transcendent"];
                setWeapons([...weapons].sort((a, b) => {
                    return rarlyOrder.indexOf(a[depandant]) - rarlyOrder.indexOf(b[depandant])
                }));
            } else if (depandant === "id" || depandant === "name" || depandant === "type") {
                setWeapons([...weapons].sort((a, b) => (
                    a[depandant] > b[depandant] ? 1 : - 1
                )));
            } else {
                setWeapons([...weapons].sort((a, b) => (
                    a['mainStats'][depandant] > b['mainStats'][depandant] ? 1 : - 1
                )));
            }
        }

    //Filter
    const handleFilter =
        e => {

            const checkedFilterID = e.target.id;
            
            filterList
                .filter(e => e.id === checkedFilterID)
                .forEach(filter => {
                    filter.checked = (filter.checked === true) ? false : true
                });

            tempFilterWeapons = [];

            filterList.forEach(filtername => {
                if (filtername.type === "rarity" && filtername.checked === true) {
                    tempFilterWeapons = tempFilterWeapons.concat(origWeapons.filter(weapon => weapon.rarity === filtername.value))
                }

                

                
            });

            console.log(depandant)

            // setPrintWeapons([])
            // printWeapons = printWeapons.concat(tempFilterWeapons);
            // console.log(weapons);
            // console.log(printWeapons);
            setForceRerender(forceRerender+1)
            // setPrintWeapons(printWeapons.concat(tempFilterWeapons))
            // console.log(forceRerender);
            // setWeapons(weapons);
            setWeapons(tempFilterWeapons)

            // if(e.target.checked === false){
            //     setWeapons([...weapons].filter(weapon => weapon['rarity'] !== 'common'))
            // } else if (e.target.checked){
            //     setWeapons([...weapons].filter(weapon => weapon['rarity'] === 'common'))
            // }
            
            
        }
        


    return (
        <div className='weapon_list'>
            <WeaponListHeader handleSort={handleSort} handleFilter={handleFilter} />

    <h1>{forceRerender}</h1>
            {
            weapons.map((weapon) =>
                <WeaponList key={weapon.id} name={weapon.name} imgScr={weapon.images.background} id={weapon.id} pickedWeapon={weapon} />
            )}
        </div>
    )
}

export default ShowWeapons