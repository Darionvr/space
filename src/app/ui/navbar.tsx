'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/Navbar.module.css'


const Navbar = () => {

    const links = [
        { position: '00', name: 'Home', href: '/', },
        { position: '01', name: 'Destinations', href: '/destinations', },
        { position: '02', name: 'Crew', href: '/crew', },
        {
            position: '03', name: 'Technology', href: '/technology',
        }]
    const pathname = usePathname();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(prev => !prev);
    };

    console.log(pathname)
    return (
        <>
            <nav className={styles.nav}>

                <Link href={pathname !== '/' ? '/' : '#'}> <img src="/assets/shared/logo.svg" alt="logo" /></Link>
                <hr />
                <ul className={styles.navbarmenu} data-visible={isMenuVisible ? 'true' : 'false'}>
                    <img className={styles.closeicon} src="/assets/shared/icon-close.svg" alt="close icon" onClick={toggleMenu} />
                    {links.map((link) => (
                        <li className={
                            link.href === '/'
                                ? pathname === '/' ? styles.active : ''
                                : pathname.startsWith(link.href) ? styles.active : ''
                        }
                            key={link.position}>
                            <Link href={link.href} onClick={toggleMenu}>
                                <span>{link.position}</span>{link.name}</Link>
                        </li>
                    ))}

                </ul>
                <img src="/assets/shared/icon-hamburger.svg" alt='mobile menu button' onClick={toggleMenu} />
            </nav>
        </>
    )
}

export default Navbar