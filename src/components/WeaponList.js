import React from 'react'
import { Link } from 'react-router-dom'

const WeaponList = ({ weapon, showLastDisplay }) => {

    return (
        <>
             
                <div className='weapons' key={weapon.id} id={weapon.id}>

                    <Link to={{
                        pathname: `/weapons/${weapon.id}`,
                        state: {weapon}
                    }}>
                        <img src={weapon.images.background} alt='weapon icon' />
                    </Link>
                    <p>{weapon.name}</p>
                </div>
            
        </>
    )
}

export default WeaponList