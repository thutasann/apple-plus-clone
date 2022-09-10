import React, { useState } from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiFillApple, AiOutlineClose, AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { BsChevronRight } from 'react-icons/bs';
import { ctas } from '../../mock/navLinks';

function MobileNavBar({ dispatch }) {

    const [ show, setShow ] = useState(false);

    return (
        <div className='mobileNav'>
            <div className='mobileNav__first'>
                {
                    !show ? (
                        <button
                            name="Hamburger"
                            aria-label="Hamburger"
                            className="hamburger"
                            onClick={() => setShow(true)}
                        >
                            <AiOutlineMenu/>
                        </button> 
                    ) : (
                        <button
                            name="Hamburger"
                            aria-label="Hamburger"
                            className="hamburger"
                            onClick={() => setShow(false)}
                        >
                            <AiOutlineClose/>
                        </button> 
                    )
                }

                <div className={`${show ? 'mr-[50px]' : 'ml-0'} mobileNav__first__logo`}>
                    <AiFillApple/>
                </div> 

                <div className='mobileNav__first__shop'>
                    { !show && <AiOutlineShopping/>}
                </div> 
            </div> 


            {/* dropdown navbar */}
            {
                show && (
                    <div className='mobileDropdwon'>
                        <div className='mobileDropdwon__search'>
                            <AiOutlineSearch size={22} fill="#b2b1b1"/>
                            <input type="text" placeholder='Search apple.com' />
                        </div>  
                        <div className='mobileDropdwon__divider'/>
                        <div className='mobileDropdwon__ctas'>
                            {
                                ctas.map((item, key) => {
                                    return (
                                        <Link href="/" key={key}>
                                            {item.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }


            <div className='mobileNav__sec'>
                <div className='mobileNav__sec__wrapper'>
                    <div className='mobileNav__sec__wrapper__logo'>
                        <Link href="/">
                            Apple TV +
                        </Link>
                    </div>
                    <div className='mobileNav__sec__wrapper__stream'>
                        <Link href="/">
                            Stream now
                        </Link>
                    </div>
                </div>
            </div>

            <div className='mobileNav__third'>
                <div className='mobileNav__third__content'>
                    <p>
                        Friday Night Baseball, now streaming on Apple TV+.
                    </p>
                    <Link href="/" className='mobileNav__third__content__cta'>
                        <span className='mobileNav__third__content__cta__span'>
                            Learn more
                            <BsChevronRight fill='#0071e3' size={14}/>
                        </span> 
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default MobileNavBar;