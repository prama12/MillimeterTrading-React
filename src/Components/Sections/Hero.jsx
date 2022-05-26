import React from 'react'

const Hero = () => {
     return (
          <>
               {/* hero section */}
               <div id="home" className="w-padding mt-6 sm:scroll-m-44 scroll-m-32">
                    <div
                         className="max-w items-center md:grid-cols-2 grid grid-cols-1 place-content-center gap-12"
                    >
                         {/* left  */}
                         <div className="text-center md:text-left lg:order-1 order-2">
                              <h1 className="heading">
                                   Semplifica il tuo trading Scopri la potenza di
                              </h1>
                              <div className="flex md:justify-start justify-center items-start">
                                   <div className="">
                                        <h1 className="viewpoint heading-blue flex">
                                             Alfa Advisor <span className="text-2xl">©</span>
                                        </h1>
                                   </div>
                              </div>

                              {/* button */}
                              <a href="#purchase" aria-label="">
                                   <div className="main-btn">
                                        <p className="btn-text">INIZIA ORA</p>
                                        <svg
                                             className="h-5 w-5"
                                             viewBox="0 0 17 15"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <path
                                                  d="M0 7.7257C0 7.346 0.282154 7.03221 0.648229 6.98255L0.75 6.9757L15.75 6.9757C16.1642 6.9757 16.5 7.31149 16.5 7.7257C16.5 8.1054 16.2178 8.41919 15.8518 8.46885L15.75 8.4757L0.75 8.4757C0.335786 8.4757 0 8.13991 0 7.7257Z"
                                                  fill="#fff"
                                             />
                                             <path
                                                  d="M9.17101 2.23277C8.87749 1.94051 8.87646 1.46564 9.16872 1.17211C9.43442 0.905273 9.85103 0.880171 10.1451 1.09739L10.2294 1.16983L16.2794 7.19383C16.547 7.46032 16.5714 7.87843 16.3524 8.1725L16.2794 8.25673L10.2294 14.2817C9.93593 14.574 9.46105 14.573 9.16877 14.2795C8.90305 14.0127 8.87971 13.596 9.09817 13.3028L9.17096 13.2189L14.687 7.725L9.17101 2.23277Z"
                                                  fill="#fff"
                                             />
                                        </svg>
                                   </div>
                              </a>
                         </div>
                         {/* right  */}
                         <div className="relative lg:order-2 order-1">
                              <picture>
                                   <img
                                        src="Images/big_ellipse.webp"
                                        className="md:h-full md:w-full object-cover"
                                        alt=""
                                   />
                              </picture>
                              <picture>
                                   <img
                                        src="Images/small_ellipse.webp"
                                        className="-top-56 -left-10 z-0 absolute"
                                        alt=""
                                   />
                              </picture>
                              <picture>
                                   <img
                                        src="Images/hero-image.webp"
                                        className="absolute top-10 lg:top-0 md:h-full object-contain scale-110"
                                        alt=""
                                   />
                              </picture>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Hero
