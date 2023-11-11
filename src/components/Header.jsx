import { Link } from "react-router-dom"
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-center h-24 items-center '>
            <ul>
                <li className='cursor-pointer border-solid border-black border-2 rounded-md px-4 py-2 bg-blue-500 text-white font-bold uppercase hover:bg-sky-400'>
                    <Link to="/persons" > persons</Link>                   
                </li>
            </ul>
        </div>
    )
}

export default Header