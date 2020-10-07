import React, { useContext } from 'react'
import { WeaponContext } from './WeaponContext'
import WeaponDetailTable from './WeaponDetailTable'
import "./WeaponDetail.css"




const WeaponDetail = ({ match }) => {

    window.scrollTo(0, 0)

    let [weapons] = useContext(WeaponContext);
    const weaponID = match.params.id;


    return (


        <div className="weapon_detail">

            {weapons.filter(weapon => weapon.id === weaponID).map(pickedWeapon => (
                <WeaponDetailTable
                    key={pickedWeapon.id}
                    name={pickedWeapon.name}
                    imgScr={pickedWeapon.images.background}
                    rarity={pickedWeapon.rarity}
                    type={pickedWeapon.type}
                    DmgPB={pickedWeapon.mainStats.DmgPB}
                    firingRate={pickedWeapon.mainStats.FiringRate}
                    clipSize={pickedWeapon.mainStats.ClipSize}
                    reloadTime={pickedWeapon.mainStats.ReloadTime}
                    BulletsPerCartridge={pickedWeapon.mainStats.BulletsPerCartridge}
                    Spread={pickedWeapon.mainStats.Spread}
                    SpreadDownsights={pickedWeapon.mainStats.SpreadDownsights}
                    DamageZone_Critical={pickedWeapon.mainStats.DamageZone_Critical}
                    description={pickedWeapon.description}
                />
            ))}

        </div>
    )
}

export default WeaponDetail
