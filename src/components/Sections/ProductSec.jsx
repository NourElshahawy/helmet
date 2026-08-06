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
import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";




export default function ProductSec({className, showButton = true}) {
    function getProducts() {
        return api.get("/products?limit=4");
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['getProducts'],
        queryFn: getProducts,

        select: (data) => {
            return data.data.data;
        },
    });

    // console.log("data:", data?.body);
    // console.log("images:", data?.body[0].images);


    return <>
        <section className={`productSec section ${className}`}>
            <div className="main-container">
                <HeadTitle value="المنتجات" />
                <div className="row g-4">
                    {data?.body?.map((product)=> {
                        return (
                            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
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
                                            {product?.images?.map((img) => (
                                                <SwiperSlide key={product.id}>
                                                    <img src={img} loading="lazy" alt={product.title} />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </figure>

                                    <div className="text">
                                        <h4>{product.name}</h4>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {showButton && (
                    <MainBtn href="/products" value="عرض جميع المنتجات" className='mx-auto mt-5' />
                )}
            </div>
        </section>
    </>
}
