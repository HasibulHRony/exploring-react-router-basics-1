import React, { useState } from 'react'
import { Link, NavLink } from 'react-router';
import NavItems from './NavItems';
import { IoMenuSharp } from "react-icons/io5";
import { FaWindowClose } from 'react-icons/fa';

const routes = [
    {
        id: 1,
        pathname: "Home",
        path: "/"
    },
    {
        id: 2,
        pathname: "About",
        path: "/about"
    },
    {
        id: 3,
        pathname: "Services",
        path: "/services"
    },
    {
        id: 4,
        pathname: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        pathname: "Contact",
        path: "/contact"
    }
];

const links = routes.map(route => <NavItems key={route.id} route={route}></NavItems>)

export default function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-between m-6'>
            <div className='flex'>
                <span className='md:hidden' onClick={() => { setOpen(!open) }}>{open ? <FaWindowClose /> : <IoMenuSharp />}</span>
                <ul className={`md:hidden text-black absolute bg-amber-200 duration-1000 ${open ? "flex top-10" : "-top-40"} flex flex-col`}>
                    {
                        links
                    }
                </ul>
                <span className='hidden md:flex'>My Nav</span>

            </div>


            <ul className='hidden md:flex gap-5'>
                {/* {
                routes.map(route=><NavLink className='ml-5' key={route.id}>{route.pathname}</NavLink>)
            } */}

                {
                    links
                }
            </ul>
            <div>
                <span>Profile</span>
            </div>
        </nav>
    )
}
