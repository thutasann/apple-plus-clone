import React from 'react'
import { productPacks, products } from '../../mock/products'
import Image from 'next/image';
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';


const Products = () => {
    return (
        <div className='productWrapper'>
            {
                productPacks.map((pack, i) => {
                    return(
                        <div key={i} className={`${pack.flexReverse === false ? "flex-col-reverse lg:flex-row-reverse items-start": ""} productWrapper__pack`}>

                            {/* media part */}
                            <div className='productWrapper__pack__media'>
                                <Image
                                    src={pack.image}
                                    width="500px"
                                    height={`${pack.flexReverse === false ? '500px': '300px'}`}
                                    alt={pack.title}
                                    placeholder="blur"
                                    blurDataURL={pack.image}
                                    loading="lazy"
                                />
                            </div> 

                            {/* Text part */}
                            <div className='productWrapper__pack__content'>
                                {
                                    pack.tagImage && (
                                        <Image
                                            src={pack.tagImage}
                                            width="100px"
                                            height="30px"
                                            alt={pack.title}
                                            placeholder="blur"
                                            blurDataURL={pack.image}
                                            loading="lazy"
                                        />
                                    )
                                }
                                <h1>
                                    {pack.title}
                                </h1>
                                {
                                    pack.tryCta && (
                                        <div className='productWrapper__pack__content__try'>
                                            <Link href="/">
                                                {pack.tryCta}
                                            </Link>
                                        </div>
                                    )
                                }
                                {
                                    pack.larnMoreCta && (
                                        <div className='productWrapper__pack__content__learn'>
                                            <Link href="/">
                                                <span className='aboutWrapper__stream__cta__content'>
                                                    Learn more
                                                    <BsChevronRight/>
                                                </span>
                                            </Link>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    )
                })
            }
            <div className='productWrapper__grid'>
                {
                    products.map((product, i) => {
                        return(
                            <div className='productWrapper__grid__card' key={i}>
                                <div className='productWrapper__grid__card__heading'>
                                    {
                                        product.tagImage ? (
                                            <Image
                                                src={product.tagImage}
                                                width="100px"
                                                height="30px"
                                                alt={product.title}
                                                placeholder="blur"
                                                blurDataURL={product.tagImage}
                                                loading='lazy'
                                            /> 
                                        ) : (
                                            <h3>AirPlay</h3>
                                        )
                                    }
                                    <h1>{product.title}</h1>
                                    <div className='productWrapper__grid__card__heading__ctaGrid'>
                                        {
                                            product.buyCta && (
                                                <Link href="/" >
                                                    <span className='productWrapper__grid__card__heading__ctaGrid__buyCta'>
                                                        Buy
                                                    </span>
                                                </Link>
                                            )
                                        }
                                        {
                                            product.larnMoreCta && (
                                                <Link href="/" className='aboutWrapper__stream__cta__content'>
                                                    <span className='aboutWrapper__stream__cta__content'>
                                                        Learn more
                                                        <BsChevronRight/>
                                                    </span>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className='productWrapper__grid__card__media'>
                                    <Image
                                        src={product.image}
                                        width="500px"
                                        height="500px"
                                        alt={product.title}
                                        placeholder="blur"
                                        blurDataURL={product.image}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products