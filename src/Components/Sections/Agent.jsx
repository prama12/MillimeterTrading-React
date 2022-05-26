import React from 'react'

const Agent = () => {
     return (
          <>
               {/* <!-- Become an agent --> */}
               <div
                    id="work_with_us"
                    className="w-padding sm:scroll-m-44 scroll-m-32 mt-16 md:mt-44"
               >
                    <div className="max-w">
                         <div
                              className="grid items-center justify-items-center grid-cols-1 md:grid-cols-2"
                         >
                              {/* <!-- left --> */}
                              <div className="md:order-1 md:text-left text-center order-2 mt-5 md:mt-0">
                                   <h1 className="heading md:mt-0 mt-10">Diventa agente</h1>
                                   <p className="heading-blue viewpoint inline-block">Ufficiale!</p>
                                   <p
                                        className="text-base w-full dark:text-white lg:w-1/2 font-exteabold mt-5"
                                   >
                                        Diventando agente ufficiale di Trading Millimetrico® riceverai
                                        fino a 200€ per ogni cliente presentato più ulteriori fantastici
                                        bonus!
                                   </p>
                              </div>
                              {/* <!-- right --> */}
                              <div className="relative order-1 md:order-2">
                                   <picture
                                   ><img src="Images/big_ellipse.webp" alt=""
                                        /></picture>
                                   <picture
                                   ><img
                                             loading="min"
                                             src="Images/agent-min.webp"
                                             className="absolute top-16 md:w-[80%] w-[80%] md:top-24 left-9 md:left-16"
                                             alt=""
                                        /></picture>
                                   <picture
                                   ><img
                                             src="Images/small_ellipse.webp"
                                             className="absolute -bottom-48"
                                             alt=""
                                        /></picture>
                              </div>
                         </div>
                         <div
                              className="grid md:-mt-10 mt-16 items-center justify-items-center gap-10 grid-cols-1 md:grid-cols-2"
                         >
                              {/* <!-- left --> */}
                              <div className="relative">
                                   <picture
                                   ><img src="Images/big_ellipse.webp" alt=""
                                        /></picture>
                                   <picture
                                   ><img
                                             src="Images/broker.png"
                                             className="absolute top-16 w-[80%] md:top-24 left-9 md:left-16"
                                             alt=""
                                        /></picture>
                                   <picture
                                   ><img
                                             src="Images/small_ellipse.webp"
                                             className="absolute -bottom-44 md:-top-44"
                                             alt=""
                                        /></picture>
                              </div>
                              {/* <!-- right --> */}
                              <div className="md:text-left text-center mt-5 md:mt-0">
                                   <h1 className="heading">
                                        Il <span className="heading-blue viewpoint">broker</span> utilizzato
                                        dai nostri clienti
                                   </h1>

                                   <p
                                        className="text-base dark:text-white w-full lg:w-1/2 font-exteabold mt-5"
                                   >
                                        cegliendo lo stesso broker utilizzato attualmente dai nostri
                                        clienti, riceverai fino a 500€ per ogni cliente presentato più
                                        ulteriori ingenti commissioni!
                                   </p>
                              </div>
                         </div>
                         {/* <!-- button --> */}

                         <a aria-label="" href="#contacts">
                              <div className="flex justify-center">
                                   <div className="main-btn">
                                        <p className="btn-text">Contattaci per maggiori informazioni</p>
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
                              </div>
                         </a>
                    </div>
               </div>
          </>
     )
}

export default Agent
