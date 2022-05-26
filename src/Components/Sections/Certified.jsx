import React from 'react'

const Certified = () => {
     return (
          <>
               {/* Certified Results */}
               <div
                    id="myfxbook"
                    className="w-padding mt-16 md:mt-24 sm:scroll-m-44 scroll-m-32"
               >
                    <div className="max-w">
                         <div className="sm:flex text-center justify-center gap-2">
                              <h1 className="heading">Risultati</h1>
                              <div className="flex justify-center sm:justify-start">
                                   <p className="heading-blue viewpoint">Certificati</p>
                                   <p className="text-xl text-primary-blue">&copy;</p>
                              </div>
                         </div>
                         <picture
                         ><img
                                   loading="lazy"
                                   src="./assets/images/display-min.webp"
                                   className="mt-10"
                                   alt="display"
                              /></picture>
                         <p
                              className="text-xs font-semibold dark:text-white text-center mt-6 md:mt-10"
                         >
                              Risultati passati non garantiscono risultati futuri
                         </p>
                    </div>
               </div>
          </>
     )
}

export default Certified
