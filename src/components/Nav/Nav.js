import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSite from 'hooks/use-site'
import logo from '../../../public/YouNet-LogoW.webp'
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus'

import styles from './Nav.module.scss'
import useScrollPosition from '../../hooks/useScrollPosition'
import CallToAction from '../CallToAction'
import Burger from './Burger'
import NavListItem from '../NavListItem'

const Nav = () => {
    const menuRef = useRef()
    const scrollPosition = useScrollPosition()

    const { metadata = {}, menus } = useSite()

    const { title } = metadata

    const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT

    const navigation = findMenuByLocation(menus, navigationLocation)


    useEffect(() => {
            if (window.location.pathname === '/') {
                if (scrollPosition >= 120) {

                    if (menuRef.current) {
                        menuRef.current.classList.add('nav-scrolled')
                    }
                } else {
                    if (menuRef.current) {
                        menuRef.current.classList.remove('nav-scrolled')

                    }
                }
            } else {
                menuRef.current.classList.add('nav-scrolled')

            }


        },
        [scrollPosition]
    )

    return (

        <>
            <div>
                <nav data-menu-transition ref={menuRef}
                     className={'p-[1rem] main-nav pt-2 fixed m-0 w-full z-50'}>
                    <div className='gradient-01 h-[239px] absolute w-[152px]' />
                    <div className={'site-navigation'}>
                        <p  className={styles.navName + ' z-50'}>
                            <Link legacyBehavior href='/'>
                                <a className={'text-4xl text-white p-0 m-0'}>
                                    <Image src={logo} alt='me' width={'90'} height={'51'} loading={'lazy'} />

                                </a>
                            </Link>
                        </p>
                        <div  className={'flex gap-6'}>
                            <button aria-label={'Ζητήστε τιμή'} type={'button'} className={'burger-container'}>
                                <CallToAction>
                                    <div data-menu-transition className={'request-quote hidden md:block'}>Ζητηστε τιμη
                                    </div>
                                </CallToAction>
                            </button>
                            <button aria-label={'Μενού'} type={'button'} className={'burger-container'} onClick={() => {
                                const lines = [...document.querySelectorAll('[data-menu-transition]')]
                                lines.forEach((line) => {
                                    line.classList.toggle('menu-open')
                                })
                            }} onTouchStart={() => {
                                const lines = [...document.querySelectorAll('[data-menu-transition]')]
                                lines.forEach((line) => {
                                    line.classList.toggle('menu-open')
                                })
                            }}>
                                <div id={'nav-burger'} className={'flex gap-2 relative'}>
                                    <Burger data-menu-transition />
                                    <h1 data-menu-transition className={'menu-text hidden md:block'}>menu</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
                <div data-menu-transition className='menu'>
                    <div className='menu-scaling-bg bg-gradient'>

                    </div>

                    <ul className={styles.navMenu + ' nav-menu'}>
                        {navigation?.map((listItem) => {
                            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />
                        })}
                    </ul>
                </div>
            </div>

        </>


    )
}

export default Nav
