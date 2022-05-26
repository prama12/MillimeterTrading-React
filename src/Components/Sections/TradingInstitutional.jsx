import React from 'react'

const TradingInstitutional = () => {
     return (
          <>
               <div
                    id="who_we_are"
                    className="w-padding sm:scroll-m-44 scroll-m-32 mt-16 md:mt-56"
               >
                    <div
                         className="max-w grid items-center md:grid-cols-2 grid-cols-1 lg:grid-cols-3"
                    >
                         {/* left */}
                         <div className="relative col-span-2">
                              <picture>
                                   <img src="Images/big_ellipse.webp" alt="" />
                              </picture>
                              <picture>
                                   <img
                                        src="Images/small_ellipse.webp"
                                        className="-top-20 md:-top-56 -left-10 z-0 absolute"
                                        alt="" />
                              </picture>
                              {/* <video section */}
                              <div className="w-full h-full">
                                   <video
                                        id="my_video"
                                        className="video-js absolute top-0 sm:top-10 md:left-0 left-5 rounded-lg overflow-hidden sm:h-[70%] sm:w-[70%] h-[85%] w-[85%] object-contain border-1 border-primary-blue"
                                        controls
                                        preload="auto"
                                        poster="./assets/videos/poster-min.webp"
                                        data-setup="{}"
                                   >
                                        <source src="" type="video/mp4" />
                                   </video>
                              </div>
                         </div>
                         {/* right */}
                         <div className="col-span-1 text-center md:text-left">
                              <h1 className="heading mt-4 md:mt-0">Un software di trading</h1>
                              <h1 className="viewpoint text-left heading-blue inline-block">
                                   Istitizionale
                              </h1>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default TradingInstitutional
