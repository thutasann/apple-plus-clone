import React from 'react'
import Link from 'next/link';
import { BsList, BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";


function MobileNavBar({ dispatch }) {
    return (
        <dialog className='modal'>
            <button
                aria-label="Close"
                className="modal__close"
                onClick={() => {
                    dispatch("off");
                }}
            >
                <AiOutlineClose/>
            </button>
            <nav className="modal__navigation">

                {/* explore */}
                <div className='modal__navigation__explore'>
                    <div className='modal__navigation__explore__category'>
                        <BsList/>
                        <span className='goblin-p'>
                            World of Warcraft
                        </span>
                    </div>

                    <div className='modal__navigation__explore__searchBox'>
                        <input
                            placeholder='Search'
                            type="text"
                        />
                        <BsSearch/>
                    </div>
                </div>

                {/* links */}
                <div className='modal__navigation__links'>
                    <Link href="/work-with-us/">Work With Us</Link>
                    <Link href="/offers/">Offers</Link>
                </div>

                {/* auth links */}
                <div className='modal__navigation__auths'>
                    <Link href="/sign-in/" className='headerWrapper__auths__signIn'>
                        Sign in
                    </Link>
                    <Link href="/sign-up/" className='headerWrapper__auths__signUp'>
                        Sign Up
                    </Link>
                </div>

            </nav>
        </dialog>
    )
}

export default MobileNavBar;