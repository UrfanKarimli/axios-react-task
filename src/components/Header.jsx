import { Link } from "react-router-dom"
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-center h-24 items-center '>
            <ul>
                <li className='cursor-pointer '>
                    <Link to="/persons" > persons</Link>                   
                </li>
            </ul>
        </div>
    )
}

export default Header