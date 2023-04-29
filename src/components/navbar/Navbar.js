import React from 'react'
import './navbar.scss'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {

    const navigate= useNavigate()
    return (
        <div className="navbar">

            <div className="container nav-cont">


                <div className="nav-left">
                    <h1 onClick={()=>navigate('/')} className="head">Nile</h1>


                </div>

                <div className="nav-center">
                    <ul className='link-gp'>
                        <li className=' hover-link'>
                            <Link className='link' to='/'>Home</Link>
                        </li>
                        <li className='hover-link'>
                            <Link className='link' to='/contact'>Contact</Link>

                        </li>
                    </ul>

                </div>

                <div className="nav-right">
                    <div className="cart">
                        <span className='center'>99</span>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default Navbar
