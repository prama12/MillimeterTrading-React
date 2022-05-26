import React from 'react'

const ContactUs = () => {
     return (
          <>
               {/* <!-- contact us --> */}

               <div id="contacts" className="w-padding mt-16 sm:scroll-m-44 scroll-m-32">
                    <div className="max-w">
                         <div className="grid md:grid-cols-2 gap-6 items-center">
                              {/* <!-- left --> */}
                              <div className="">
                                   <h1 className="heading text-left">
                                        Per qualsiasi richiesta particolare o per maggiori informazioni
                                   </h1>
                                   <h1 className="heading-blue viewpoint inline-block text-left">
                                        Contattaci
                                   </h1>
                              </div>
                              {/* <!-- right --> */}
                              <div className="bg-primary-blue rounded-lg p-[15px] lg:p-[37px]">
                                   <h1 className="lg:text-[56px] text-white text-[30px] font-bold">
                                        lascia una richiesta
                                   </h1>
                                   <form action="" className="mt-6 space-y-4 sm:space-y-8">
                                        <input
                                             type="text"
                                             placeholder="nome *"
                                             name=""
                                             id=""
                                             className="w-full bg-white py-4 px-3 rounded-lg"
                                        />
                                        <input
                                             type="text"
                                             placeholder="Cognome *"
                                             name=""
                                             id=""
                                             className="w-full bg-white py-4 px-3 rounded-lg"
                                        />
                                        <input
                                             type="email"
                                             placeholder="Email *"
                                             name=""
                                             id=""
                                             className="w-full bg-white py-4 px-3 rounded-lg"
                                        />
                                        <textarea
                                             name=""
                                             id=""
                                             cols=""
                                             rows="8"
                                             placeholder="Messaggio *"
                                             className="w-full bg-white py-4 px-3 rounded-lg"
                                        ></textarea>
                                        <button
                                             aria-label="submit"
                                             type="submit"
                                             className="bg-white hover:scale-110 hover-animation text-primary-blue py-5 px-12 mt-6 rounded-lg"
                                        >
                                             INVIA
                                        </button>
                                        <p className="text-white mt-6 font-semibold text-[15px]">
                                             Cliccando il tasto "INVIA" l'utente accetta i nostri "Termini e
                                             Condizioni Generali" e la nostra "Politica Privacy & Politica
                                             Cookie"
                                        </p>
                                   </form>
                              </div>
                         </div>
                         <div className="h-1 w-full bg-primary-blue my-20"></div>
                    </div>
               </div>
          </>
     )
}

export default ContactUs
