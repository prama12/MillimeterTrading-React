import React from 'react'

const Newspaper = () => {
     return (
          <>
               <div className="mt-16">
                    <div
                         className="bg-gradient-to-b from-event_gradient-light_from to-white dark:from-event_gradient-dark_from dark:via-event_gradient-dark_via dark:to-event_gradient-dark_to pb-24 flex justify-center text-center"
                    >
                         <div className="">
                              <h1 className="heading mt-14">Alcuni giornali che parlano di</h1>
                              <h1 className="heading-blue viewpoint inline-block">
                                   Trading Millimetrico®
                              </h1>
                              <div
                                   className="grid lg:grid-cols-3 grid-cols-2 justify-items-center mb-16 md:mb-44 xl:grid-cols-4 items-center mt-5 md:mt-16 gap-x-[85px] p-10"
                              >
                                   <picture
                                   ><img src="Images/company1.webp" alt=""
                                        /></picture>
                                   <picture
                                   ><img src="Images/company2.webp" alt=""
                                        /></picture>
                                   <picture
                                   ><img src="Images/company3.webp" alt=""
                                        /></picture>
                                   <picture
                                   ><img src="Images/company4.webp" alt=""
                                        /></picture>

                                   <picture
                                   ><img src="Images/company5.webp" alt=""
                                        /></picture>
                                   <picture
                                   ><img src="Images/company6.webp" alt=""
                                        /></picture>
                                   <picture
                                   ><img src="Images/company7.webp" alt=""
                                        /></picture>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Newspaper
