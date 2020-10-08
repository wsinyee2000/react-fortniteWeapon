import React, { createContext, useState, useEffect } from 'react'
import weaponData from './data/data.json'
import axios from 'axios'

export const WeaponContext = createContext();

export const WeaponProvider = props => {

    const [weapons, setWeapons] = useState([])

    useEffect(() => {

        // get json file
        // const reqWeapons = async () => {
        //     const data = await fetch(weaponData);
        //     const items = await data.json();

        //     //change null images weapon to 'no image available'
        //     items.weapons.forEach(weapon => {
        //         weapon.images.background = (weapon.images.background === null) ? '/no-image-available.jpg' : weapon.images.background
        //     });

        //     //remove same id
        //     items.weapons = getUnique(items.weapons, 'id');
        //     setWeapons(items.weapons);
        // };
        // reqWeapons();

        //axios method
        // axios
        //     .get('../data.json')
        //     .then(res => {
        //         console.log(res)

        //         //change null images weapon to 'no image available'
        //         res.data.weapons.forEach(weapon => {
        //             weapon.images.background = (weapon.images.background === null) ? '/no-image-available.jpg' : weapon.images.background
        //         });

        //         //remove same id weapon
        //         res.data.weapons = getUnique(res.data.weapons, 'id')

        //         //sort by ID
        //         res.data.weapons = res.data.weapons.sort((a, b) => (
        //             a['id'] > b['id'] ? 1 : - 1
        //         ));

        //         setWeapons(res.data.weapons)
        //     })
        //     .catch(err =>
        //         console.log(err)
        //     )

        //new method    
        
        let temp_weapons = weaponData.weapons;

        //change null images weapon to 'no image available'
        temp_weapons.forEach(weapon => {
            weapon.images.background = (weapon.images.background === null) ? 'https://www.freeiconspng.com/uploads/no-image-icon-15.png' : weapon.images.background
        });

        //remove same id weapon
        temp_weapons = getUnique(temp_weapons, 'id')

        //sort by ID
        temp_weapons = temp_weapons.sort((a, b) => (
            a['id'] > b['id'] ? 1 : - 1
        ));

        setWeapons(temp_weapons);




    }, []);


    //remove same id wepaon
    function getUnique(arr, comp) {

        // store the comparison  values in array
        const unique = arr.map(e => e[comp])

            // store the indexes of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the false indexes & return unique objects
            .filter((e) => arr[e]).map(e => arr[e]);

        return unique;

    }



    return (
        <>
            <WeaponContext.Provider value={[weapons, setWeapons]}>
                {props.children}
            </WeaponContext.Provider>
        </>
    );

}


