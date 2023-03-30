import { memo, useCallback, useEffect, useRef, useState } from 'react'
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

const SEARCH_VISIBLE = 'visible'
const SEARCH_HIDDEN = 'hidden'

const Nav = () => {
    const formRef = useRef()
    const menuRef = useRef()
    const scrollPosition = useScrollPosition()

    const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN)

    const { metadata = {}, menus } = useSite()

    const { title } = metadata

    const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT

    const navigation = findMenuByLocation(menus, navigationLocation)


    useEffect(() => {
        if (searchVisibility === SEARCH_HIDDEN) {
            removeDocumentOnClick()
            return
        }

        addDocumentOnClick()
        addResultsRoving()


        const searchInput = Array.from(formRef.current.elements).find((input) => input.type === 'search')

        searchInput.focus()

        return () => {
            removeResultsRoving()
            removeDocumentOnClick()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchVisibility])

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

    /**
     * addDocumentOnClick
     */

    function addDocumentOnClick() {
        document.body.addEventListener('click', handleOnDocumentClick, true)
    }

    /**
     * removeDocumentOnClick
     */

    function removeDocumentOnClick() {
        document.body.removeEventListener('click', handleOnDocumentClick, true)
    }

    /**
     * handleOnDocumentClick
     */

    function handleOnDocumentClick(e) {
        if (!e.composedPath().includes(formRef.current)) {
            setSearchVisibility(SEARCH_HIDDEN)
        }
    }

    /**
     * handleOnSearch
     */

    function handleOnSearch({ currentTarget }) {
    }

    /**
     * handleOnToggleSearch
     */

    function handleOnToggleSearch() {
        setSearchVisibility(SEARCH_VISIBLE)
    }

    /**
     * addResultsRoving
     */

    function addResultsRoving() {
        document.body.addEventListener('keydown', handleResultsRoving)
    }

    /**
     * removeResultsRoving
     */

    function removeResultsRoving() {
        document.body.removeEventListener('keydown', handleResultsRoving)
    }

    /**
     * handleResultsRoving
     */

    function handleResultsRoving(e) {
        const focusElement = document.activeElement

        if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (focusElement.nodeName === 'INPUT' && focusElement.nextSibling.children[0].nodeName !== 'P') {
                focusElement.nextSibling.children[0].firstChild.firstChild.focus()
            } else if (focusElement.parentElement.nextSibling) {
                focusElement.parentElement.nextSibling.firstChild.focus()
            } else {
                focusElement.parentElement.parentElement.firstChild.firstChild.focus()
            }
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (focusElement.nodeName === 'A' && focusElement.parentElement.previousSibling) {
                focusElement.parentElement.previousSibling.firstChild.focus()
            } else {
                focusElement.parentElement.parentElement.lastChild.firstChild.focus()
            }
        }
    }


    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setSearchVisibility(SEARCH_HIDDEN)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        document.addEventListener('keydown', escFunction, false)

        return () => {
            document.removeEventListener('keydown', escFunction, false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
