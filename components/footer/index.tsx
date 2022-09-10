import React from 'react'
import Link from 'next/link';
import { AiFillApple } from "react-icons/ai";
import { BsChevronRight } from 'react-icons/bs';
import { footerLinks } from '../../mock/footerLinks';

const Footer = () => {

    console.log('footerLinks', footerLinks)
    return (
        <div className='footerWrapper'>

            <div className='footerWrapper__content'>
                <div className='footerWrapper__content__heading'>
                    <p>
                    * The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.
                    </p>
                    <ul>
                        <li>
                            1. $4.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
                        </li>
                        <li>
                            2. One subscription per Family Sharing group. Plan automatically renews until cancelled.
                        </li>
                        <li>
                            3. Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription. Offer good for verified college students only and does not extend to a Family Sharing group.
                        </li>
                    </ul>
                    <p>
                        Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.
                    </p>
                </div>
            </div>

            <div className='footerWrapper__ctas'>
                <div className='footerWrapper__ctas__breadcrumb'>
                    <Link href="/" className='footerWrapper__ctas__breadcrumb__logo'>
                        <AiFillApple size={19} className="cursor-pointer hover:fill-[#000]"/>
                    </Link>
                    <BsChevronRight/>

                    <Link href="/">
                        Only on Apple
                    </Link>
                    <BsChevronRight/>
                    
                    <span>
                        Apple TV+
                    </span>
                </div>

                <div className='footerWrapper__ctas__grid'>
                    {
                        footerLinks.map((link) => {
                            return (
                                <div>
                                    <h3>{link.category}</h3>
                                    <div>
                                        <ul>
                                            {
                                                link.links.map((cta) => {
                                                    return (
                                                        <li>
                                                            <Link href="/">
                                                            {cta.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                            <h3 className='subCategory'>{link?.subCategory}</h3>
                                            <ul>
                                                {
                                                    link?.subLinks?.map((sub) => {
                                                        return(
                                                            <li>
                                                                <Link href="/">
                                                                    {sub.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <h3 className='subCategory'>{link?.doubleSubCategory}</h3>
                                            <ul>
                                                {
                                                    link?.doubleSubLinks?.map((sub) => {
                                                        return(
                                                            <li>
                                                                <Link href="/">
                                                                    {sub.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <h3 className='subCategory'>{link?.tripleSubCategory}</h3>
                                            <ul>
                                                {
                                                    link?.tripleSubLinks?.map((sub) => {
                                                        return(
                                                            <li>
                                                                <Link href="/">
                                                                    {sub.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='footerWrapper__ctas__shop'>
                    <p>
                        More ways to shop:
                        <Link href="/">
                            Find an Apple Store
                        </Link> 
                        or
                        <Link href="/">
                            other retailer
                        </Link>
                        near you. Or call 1-800-MY-APPLE.
                    </p>
                </div>
                <div className='footerWrapper__ctas__copyright'>
                    <div className='footerWrapper__ctas__copyright__laws'>
                        <p>
                        Copyright © {(new Date().getFullYear())} Apple Inc. All rights reserved.
                        </p>
                        <div>
                            {
                                ["Privacy Policy", "Terms of Use", "Sales and Refund", "Legal", "Site Map"].map((link, i) => (
                                    <Link href="/" key={i}>
                                        {link}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className='footerWrapper__ctas__copyright__united'>
                        <Link href="/">
                            United States
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer