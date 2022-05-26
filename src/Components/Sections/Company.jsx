import React from 'react'

const Company = () => {
     return (
          <>
               {/* companies*/}

               <div className="w-padding mt-16 md:mt-24">
                    <div className="max-w">
                         <div
                              className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center grid-cosl-1"
                         >
                              <picture>
                                   <img id="center1" src="Images/center1-min.png" alt="" />
                              </picture>
                              <picture >
                                   <img id="center2" src="Images/center2-min.png" alt="" />
                              </picture>
                              <picture >
                                   <img id="center3" src="Images/center3-min.png" alt="" />
                              </picture>
                         </div>
                         <p className="font-semibold dark:text-white text-[15px] text-center mt-14">
                              Anni e anni di esperienza nel trading e nella programmazione di
                              software automatici, hanno portato la Trading Millimetrico® a
                              realizzare un Expert Advisor che ad oggi è unico al mondo. Il nostro
                              software di trading viene utilizzato dai più importanti e famosi enti
                              istituzionali con patrimoni di diverse centinaia di miliardi.
                         </p>
                         <div className="md:mt-20 mt-10 grid grid-cols-3">
                              <div className="bg-primary-blue h-1 w-full"></div>
                              <div className="bg-[#B2B2B2] col-span-2 h-1 w-full"></div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Company
