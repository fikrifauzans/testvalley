import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Product(props) {
    const { data } = props
    return (
        // <div className='w-full grid-cols-6'>
        //     {data?.items?.filter((v) => (v.items.length > 0)).map((v) => (
        //         <div> 
        //             <div className='grid-cols-1'>
        //                 <p> {v.title} </p>
        //                 <small> {v.description} </small>
        //             </div>
        //             <div className='grid-cols-3 '>
        //                 {v.items.map((vc) => (
        //                     <div>
        //                         <img width={300} src={vc?.publication?.media[0]?.uri} alt='' />
        //                     </div>

        //                 ))}
        //             </div>

        //         </div>
        //     ))}
        // </div>
        <div className='md:container mx-auto'>



            {data?.items?.filter((v) => (v.items.length > 0)).map((v) => (

                <div className='grid grid-cols-12 mt-20'>
                    <div className=' col-span-12 md:col-span-3 lg:col-span-3  mb-4'>
                        <div className=' text-2xl   font-medium'>
                            {(v.title)}
                        </div>


                        <div className='text-gray-400'>
                            {(v.subtitle)}
                        </div>
                    </div>

                    <div className=' col-span-12 md:col-span-9 hidden md:inline'>
                        <SliderProduct v={v} slidePerView={3} />

                    </div>
                    <div className=' col-span-12 md:col-span-9 sm:inline md:hidden'>
                        <SliderProduct v={v} slidePerView={2} />

                    </div>



                </div >
            ))}
        </div >
    )
}


function SliderProduct(props) {
    const { v, slidePerView } = props



    function transformNumber(number) {
        return number.toLocaleString();
    }


    return (

        <Swiper

            slidesPerView={slidePerView}
            spaceBetween={30}
            // pagination={{
            //     clickable: true,
            // }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >
            {v?.items?.map((c) => (
                <SwiperSlide>
                    <div className=' w-full relative'>
                        <div className='relative'>
                            <img className='' src={c?.publication?.media[0]?.uri} alt='' />
                        </div>
                        {c.publication?.tagsOnImage[0] ? (
                            <div className=' p-1 m-1   z-10 absolute  bottom-1 product-brand-background'>
                                {c.publication?.tagsOnImage[0]}
                            </div>

                        ) : ''}
                    </div>
                    <div className='  font-extralight'>{(c.publication?.title)}</div>
                    <div className=' font-medium  text-xl '>
                        <span>
                            {c.publication?.priceInfo?.couponDiscountRate ? (
                                <>
                                    <span className=' text-red-500'>

                                        {c.publication?.priceInfo?.couponDiscountRate + '%'}
                                    </span>
                                    <span>

                                        {transformNumber(c.publication?.priceInfo?.couponDiscountPrice)}
                                    </span>
                                </>

                            ) : transformNumber(c.publication?.priceInfo?.price)}
                        </span>
                    </div>
                    <div className='  text-sm'>
                        <span className='bg-gray-100'>

                            {(c.publication?.tagsOnDesc[0])}
                        </span>
                    </div>
                    <div>
                        <span className='flex flex-row text-sm'>
                            <img src="https://www.testvalley.kr/star/star-darkgray.svg" alt="" srcset="" />

                            {(c.publication?.rating)}
                        </span>
                    </div>

                    {c?.publication?.prefaceIconUrl && c?.publication?.preface ? (
                        <div className='p-1' style={{ border: '1px solid rgb(238, 238, 238)' }}>
                            <span className='flex flex-row items-center'>
                                <img width={12} src={c?.publication?.prefaceIconUrl} alt="" />
                                <div className=' ml-2 text-sm   font-extralight ' >

                                    {(c?.publication?.preface)}
                                </div>
                            </span>



                        </div>

                    ) : ''}
                    {/* {JSON.stringify(c?.publication?.media[0]?.uri)} */}
                </SwiperSlide>
            ))}

        </Swiper>

    )
}