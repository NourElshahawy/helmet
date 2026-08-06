import React from 'react';
import HeadTitle from '../ui/HeadTitle';
import productImg1 from '../../assets/images/product-1.webp';
import productImg2 from '../../assets/images/product-2.webp';
import productImg3 from '../../assets/images/product-3.webp';
import productImg4 from '../../assets/images/product-4.webp';
import MainBtn from '../ui/MainBtn';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";



export default function ProductSec({className, showButton = true}) {
    const products = [
        {
            images: [productImg1, productImg2, productImg3],
            title: "بكج هيلمت توكن",
            desc: "بكج حماية Token حماية انيقة وشاملة للجوال.",
        },
        {
            images: [productImg2, productImg1, productImg3],
            title: "استيكر هيلمت شل 360 خصوصية",
            desc: "كفر نحيف وشفاف بتصميم أنيق، مزود بقطعة إضافية لدعم MagSafe، خفيف الوزن، مريح في الاستخدام ويحافظ على أناقة جهازك.",
        },
        {
            images: [productImg3, productImg3, productImg1],
            title: "استيكر هيلمت شل 360 خصوصية",
            desc: "حماية متطورة بخصوصية كاملة من جميع الزوايا 360 درجة."
        },
        {
            images: [productImg4, productImg1, productImg3],
            title: "استيكر هيلمت شل خصوصية",
            desc: "حماية شاشة بخصوصية ثنائية الاتجاه تمنع الرؤية الجانبية وتحافظ على خصوصيتك.",
        },
    ];

    return <>
        <section className={`productSec section ${className}`}>
            <div className="main-container">
                <HeadTitle value="المنتجات" />
                <div className="row g-4">
                    {products.map((product, index)=> {
                        return (
                            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                                <div className="cardSlider">
                                    <figure>
                                        <Swiper
                                            modules={[ Autoplay]}
                                            slidesPerView={1}
                                            loop
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            pagination={{ clickable: true }}>
                                            {product.images.map((img, i) => (
                                                <SwiperSlide key={i}>
                                                    <img src={img} loading="lazy" alt={product.title} />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </figure>

                                    <div className="text">
                                        <h4>{product.title}</h4>
                                        <p>{product.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <MainBtn value="عرض جميع المنتجات" className='mx-auto mt-5' /> */}

                {showButton && (
                    <MainBtn href="/products" value="عرض جميع المنتجات" className='mx-auto mt-5' />
                )}
            </div>
        </section>
    </>
}
