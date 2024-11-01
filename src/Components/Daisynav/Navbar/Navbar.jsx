import React, { useState } from 'react';
import Link from '../../link/Link';
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact Us" },
    { id: 5, path: "/profile/:id", name: "User Profile" },
  ];
  
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='text-black'>
            <div className='text-3xl md:hidden bg-yellow-100' onClick={() => setOpen(!open)}>
                {
                    open ? <IoCloseOutline /> : <RiMenu2Fill  />
                }
                
            </div>
            

            <ul className={`
                absolute md:static md:m-0
                ${open? 'top-8' : '-top-60'}
                duration-1000
                md:flex  ml-3 mt-1 px-4 py-2 bg-yellow-100`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;