import React from 'react'

function WeaponDetailTable(weapon) {
    return (
        <>
        
            <div className="weapon_detail_nameandarrow">
              
                <div className="weapon_detail_arrow" onClick={function goBack() {window.history.back();}} >
                    <img src="/back-arrow.png" alt=""/>
                </div>
                <h2 className="weapon_detail_name">{weapon.name}</h2>
            </div>
            <div className="weapon_detail_imgandcontent">
                <img className="weapon_detail_img" src= {weapon.imgScr} alt="" />
                <div className="weapon_detail_content">
                    <p className="weapon_detail_rarity">Rarity: {weapon.rarity}</p>
                    <p className="weapon_detail_type">Type: {weapon.type}</p>
                    <p className="weapon_detail_DmgPB">DmgPB: {weapon.DmgPB}</p>
                    <p className="weapon_detail_FiringRate">Firing Rate: {weapon.firingRate}</p>
                    <p className="weapon_detail_ClipSize">Clip Size: {weapon.clipSize}</p>
                    <p className="weapon_detail_ReloadTime">Reload Time: {weapon.reloadTime}</p>
                    <p className="weapon_detail_BulletsPerCartridge">Bullets Per Cartridge: {weapon.BulletsPerCartridge}</p>
                    <p className="weapon_detail_Spread">Spread: {weapon.Spread}</p>
                    <p className="weapon_detail_SpreadDownsights">Spread Downsights: {weapon.SpreadDownsights}</p>
                    <p className="weapon_detail_DamageZone_Critical">Damage Zone Critical: {weapon.DamageZone_Critical}</p>
                    <p className="weapon_detail_Description">Description: {weapon.description}</p>
                </div>
            </div>
        </>
    )
}

export default WeaponDetailTable
