'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/Navbar.module.css'


const Navbar = () => {

    const pathname = usePathname();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(prev => !prev);
    };
    
    return (
        <>
            <nav className={styles.nav}>

                <img src="/assets/shared/logo.svg" alt="logo" />
                <hr />
                <ul className={styles.navbarmenu} data-visible={isMenuVisible ? 'true' : 'false'}>
                    <img className={styles.closeicon} src="/assets/shared/icon-close.svg" alt="close icon" onClick={toggleMenu}/>
                    <li className={pathname === '/' ? `${styles.active}` : ''}> <Link href="/" onClick={toggleMenu}><span>00</span>Home </Link></li>
                    <li className={pathname.startsWith('/destinations') ? `${styles.active}` : ''}> <Link href="/destinations" onClick={toggleMenu}> <span>01</span>Destination</Link></li>
                    <li className={pathname.startsWith('/crew') ? `${styles.active}` : ''}><Link href="/crew" onClick={toggleMenu}><span>02</span>Crew</Link></li>
                    <li className={pathname.startsWith('/technology') ? `${styles.active}` : ''}> <Link href="/technology" onClick={toggleMenu}><span>03</span>Technology</Link></li>
                </ul>
                <img src="/assets/shared/icon-hamburger.svg" alt='mobile menu button' onClick={toggleMenu}/>
            </nav>
        </>
    )
}

export default Navbar