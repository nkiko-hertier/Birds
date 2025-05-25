import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import Login from './Login';

interface LayoutProps {
    children: any
    links: {
        label: string;
        path: string;
        icon?: React.JSX.Element;
    }[];
    title: string
}

function Layout({ children, links, title }: LayoutProps) {
    // check user for fackauth
    const isLogin = localStorage.getItem('nkiko3v3l0p3r');
    if (!isLogin) return <Login />

    const [nav, setNav] = useState(true);
    const Bird = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-feather" aria-hidden="true"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>;
    return (
        <div className='h-screen overflow-hidden bg-[#161618] flex'>
            <div className=' max-lg:hidden'>
                <div className='w-[300px] border-r h-full border-zinc-800'>
                    <div className='flex items-center text-white p-10 gap-1'>
                        {Bird}
                        <h1 className='text-zinc-600'>
                            {title ?? 'Dashboard'}
                        </h1>
                    </div>
                    <hr className='border-zinc-800 mx-4' />

                    <ul className='space-y-2 mt-5'>
                        <h1 className='text-zinc-400 my-4 uppercase font-light text-sm  pl-4'>Dashboard Pages</h1>

                        {links.map((link, i) =>
                            <li className='flex items-center gap-3  text-zinc-300 hover:text-[#f97583] p-1 pl-4'>
                                {link.icon ?? ''}
                                <Link to={link.path}>{link.label}</Link>
                            </li>)}
                    </ul>

                    <hr className='border-zinc-800 mx-4 my-7' />
                </div>
            </div>
            <div className='w-full bg-[#191a1d] text-white h-screen overflow-y-auto'>
                <div className='bg-zinc-800 min-h-[50px] items-center mt-4 rounded-2xl mx-5'>
                    <div className="flex justify-between p-3 h-[50px] items-center">
                        {Bird}
                        <div className='flex gap-3 items-center'>
                            <button
                                onClick={() => {
                                    const isLogout = confirm("are sure you want to logout?");
                                    if (!isLogout) return;
                                    localStorage.removeItem('nkiko3v3l0p3r')
                                    window.location.reload();
                                }} 
                                className='text-sm bg-[#ac5c5c] outline-2 outline-[#ac5c5cb7] py-1 px-3 rounded-md'
                            >Logout</button>

                            <span onClick={()=> setNav(!nav)} className='lg:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
                            </span>
                        </div>
                    </div>
                    <div hidden={nav} className='*:text-center'>
                        {links.map((link, i) =>
                            <li className='flex items-center gap-3  text-zinc-300 hover:text-[#f97583] py-1'>
                                <Link className='text-center block w-full' to={link.path}>{link.label}</Link>
                            </li>
                        )}
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Layout