import React, { useState } from 'react'
import Link from 'next/link';
import { AiFillApple, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { ctas } from '../../mock/navLinks';
import { BsChevronRight } from 'react-icons/bs';
import useToggle from '../../hook';
import MobileNavBar from '../mobile-navbar';


const Header = () => {

    const { state, dispatch } = useToggle();

    return (
        <>

            <MobileNavBar dispatch={dispatch} />

            <div className='navbar'>
                <div className='navbar__wrapper'>
                    <div className='navbar__wrapper__logo'>
                        <Link href="/" className="navbar__wrapper__logo__icon">
                            <AiFillApple size={22}/>
                        </Link>
                    </div>

                    <div className='navbar__wrapper__ctas'>
                        {
                            ctas.map((item, key) => (
                                <Link href="/" key={key}>
                                    {item.name}
                                </Link>
                            ))
                        }
                        <AiOutlineSearch size={22}/>
                        <AiOutlineShopping size={22}/>
                    </div>
                </div>
            </div>
            
            <div className='secNavbar'>
                <div className='secNavbar__wrapper'>
                    <div className='secNavbar__wrapper__logo'>
                        <Link href="/">
                            Apple TV +
                        </Link>
                    </div>
                    <div className='secNavbar__wrapper__stream'>
                        <Link href="/">
                            Stream now
                        </Link>
                    </div>
                </div>
            </div>

            <div className='thirdNav'>
                <div className='thirdNav__content'>
                    <p>
                        Friday Night Baseball, now streaming on Apple TV+.
                    </p>
                    <Link href="/" className='thirdNav__content__cta'>
                        <span className='thirdNav__content__cta__span'>
                            Learn more
                            <BsChevronRight fill='#0071e3' size={14}/>
                        </span> 
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Header