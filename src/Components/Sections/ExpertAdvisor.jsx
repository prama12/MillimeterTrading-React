import React from 'react'

const ExpertAdvisor = () => {
     return (
          <>
               {/* expert advisor */}

               <div className="w-padding mt-16 md:mt-24 text-center">
                    <div className="max-w">
                         <h1 className="heading">Un expert advisor</h1>
                         <h1 className="heading-blue inline-block viewpoint">Rivoluzionario</h1>

                         <div
                              className="grid grid-cols-1 justify-items-center md:grid-cols-2 items-center"
                         >
                              {/* <!-- left --> */}
                              <div className="space-y-7 order-2 md:order-1">
                                   {/* <!-- single item --> */}
                                   <div
                                        className="flex items-center gap-2"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                   >
                                        <picture>
                                             <img src="Images/cylinder.png" alt="" />
                                        </picture>
                                        <p className="dark:text-white font-bold text-[15px] dark:text-white">
                                             Sei logorato dalle continue perdite subite sui mercati
                                             finanziari?
                                        </p>
                                   </div>
                                   {/* <!-- single item --> */}
                                   <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                        data-aos-delay="200"
                                        className="flex items-center gap-2"
                                   >
                                        <picture>
                                             <img src="Images/flat-half-donut.png" alt="" />
                                        </picture>
                                        <p className="font-bold dark:text-white text-[15px]">
                                             Sei stanco di trovare solo truffe o sistemi che promettono
                                             risultati certi e senza rischi?
                                        </p>
                                   </div>
                                   {/* <!-- single item --> */}
                                   <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                        data-aos-delay="300"
                                        className="flex items-center gap-2"
                                   >
                                        <picture>
                                             <img src="Images/octagon.png" alt="" />
                                        </picture>
                                        <p className="font-bold dark:text-white text-[15px]">
                                             Vorresti un software di trading in grado di operare
                                             autonomamente?
                                        </p>
                                   </div>
                                   {/* <!-- single item --> */}
                                   <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                        data-aos-delay="400"
                                        className="flex items-center gap-2"
                                   >
                                        <picture
                                        ><img src="Images/double-circle.png" alt=""
                                             /></picture>
                                        <p className="font-bold dark:text-white text-[15px]">
                                             Stai cercando un software di trading totalmente
                                             personalizzabile?
                                        </p>
                                   </div>
                                   {/* <!-- single item --> */}
                                   <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                        data-aos-delay="500"
                                        className="flex items-center gap-2"
                                   >
                                        <picture
                                        ><img src="Images/basic-gem.png" alt=""
                                             /></picture>
                                        <p className="font-bold dark:text-white text-[15px]">
                                             Sei un trader professionista, ma sei stufo di passare ore sui
                                             grafici?
                                        </p>
                                   </div>
                                   {/* <!-- single item --> */}
                                   <div
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-once="true"
                                        data-aos-delay="600"
                                        className="flex items-center gap-2"
                                   >
                                        <picture
                                        ><img src="Images/l-shape.png" alt=""
                                             /></picture>
                                        <p className="font-bold dark:text-white text-[15px]">
                                             Sei inesperto nel trading ma vuoi comunque operare sui mercati?
                                        </p>
                                   </div>
                              </div>
                              {/* <!-- right --> */}
                              <div className="relative order-1 md:order-2 mt-5 md:mt-0">
                                   <picture
                                   ><img src="Images/big_ellipse.webp" alt=""
                                        /></picture>
                                   <picture
                                   ><img
                                             loading="lazy"
                                             src="Images/alfa.webp"
                                             className="absolute h-[80%] md:h-full md:w- w-[80%] top-3 left-16"
                                             alt="alfa"
                                        /></picture>
                                   <picture
                                   ><img
                                             src="Images/small_ellipse.webp"
                                             className="absolute -top-56"
                                             alt=""
                                        /></picture>
                              </div>
                         </div>
                         {/* <!-- button --> */}
                         <a aria-label="" href="#purchase">
                              <div className="main-btn">
                                   <p className="font-extrabold text-xs md:text-lg text-white">
                                        MILLIMETRIC <sup className="tracking-[5px]">&copy;</sup> TRADING IS
                                        YOUR SOLUTION
                                   </p>
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
               </div>
          </>
     )
}

export default ExpertAdvisor
