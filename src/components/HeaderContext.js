import React, { createContext, useState, useEffect } from 'react'

export const HeaderContext = createContext();

export const HeaderProvider = props => {

    const [filterList, setFilterList] = useState([]);

    useEffect(() => {
        setFilterList([{
            id: "rarity_filter_common",
            name: "Common",
            checked: true,
            value: "common",
            type: "rarity"
        }, {
            id: "rarity_filter_uncommon",
            name: "Uncommon",
            checked: true,
            value: "uncommon",
            type: "rarity"
        }, {
            id: "rarity_filter_rare",
            name: "Rare",
            checked: true,
            value: "rare",
            type: "rarity"
        }, {
            id: "rarity_filter_epic",
            name: "Epic",
            checked: true,
            value: "epic",
            type: "rarity"
        }, {
            id: "rarity_filter_legendary",
            name: "Legendary",
            checked: true,
            value: "legendary",
            type: "rarity"
        }, {
            id: "rarity_filter_mythic",
            name: "Mythic",
            checked: true,
            value: "mythic",
            type: "rarity"
        }, {
            id: "rarity_filter_transcendent",
            name: "Transcendent",
            checked: true,
            value: "transcendent",
            type: "rarity"
        },{
            id: "type_filter_standard",
            name: "Standard",
            checked: true,
            value: "standard",
            type: "type"
        }, {
            id: "type_filter_sword",
            name: "Sword",
            checked: true,
            value: "sword",
            type: "type"
        }, {
            id: "type_filter_starwars",
            name: "Starwars",
            checked: true,
            value: "starwars",
            type: "type"
        }, {
            id: "type_filter_boos",
            name: "Boss",
            checked: true,
            value: "boss",
            type: "type"
        }] );
    }, []);

    return (
        <>
            <HeaderContext.Provider value={[filterList, setFilterList]}>
                {props.children}
            </HeaderContext.Provider>
        </>
    );

}