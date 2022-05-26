import React from 'react'

const Choose = () => {
     return (
          <>
               {/* <!-- Why choose section --> */}
               <div className="w-padding mt-14">
                    <div className="max-w">
                         <div className="sm:flex text-center justify-center gap-2">
                              <h1 className="heading">Perché scegliere</h1>
                              <div className="flex justify-center sm:justify-start">
                                   <p className="viewpoint heading-blue">Alfa Advisor</p>
                                   <p className="text-xl text-primary-blue">&copy;</p>
                              </div>
                         </div>
                         {/* <!-- contents --> */}
                         <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-16 mt-16">
                              {/* <!-- features --> */}
                              <div className="col-span-3">
                                   <div
                                        className="grid sm:grid-cols-2 grid-cols-1 gap-3 sm:gap-10 md:gap-16 items-center"
                                   >
                                        {/* <!-- single items --> */}
                                        <div className="flex items-center gap-4">
                                             <picture
                                             ><img src="Images/automate.png" alt=""
                                                  /></picture>
                                             <div className="text-[15px]">
                                                  <h1 className="font-extrabold text-primary-blue">
                                                       100% Automatico
                                                  </h1>
                                                  <p className="leading-[32px] font-semibold dark:text-white">
                                                       Risparmia il tuo tempo, Alfa Advisor© lavorerà per te,
                                                       monitorerai solo le operazioni
                                                  </p>
                                             </div>
                                        </div>
                                        {/* <!-- single items --> */}
                                        <div className="flex items-center gap-4">
                                             <picture
                                             ><img src="Images/personalize.png" alt=""
                                                  /></picture>
                                             <div className="text-[15px]">
                                                  <h1 className="font-extrabold text-primary-blue">
                                                       100% Personalizzabile
                                                  </h1>
                                                  <p className="leading-[32px] font-semibold dark:text-white">
                                                       Deciderai tu gli obiettivi, per tanto avrai sempre il pieno
                                                       controllo del tuo capitale
                                                  </p>
                                             </div>
                                        </div>
                                        {/* <!-- single items --> */}
                                        <div className="flex items-center gap-4">
                                             <picture><img src="Images/visa.png" alt="" /></picture>
                                             <div className="text-[15px]">
                                                  <h1 className="font-extrabold text-primary-blue">
                                                       Garantito a vita
                                                  </h1>
                                                  <p className="leading-[32px] font-semibold dark:text-white">
                                                       Il tuo Alfa Advisor© sarà garantito per sempre sin dal primo
                                                       momento che inizierai ad utilizzare il software
                                                  </p>
                                             </div>
                                        </div>
                                        {/* <!-- single items --> */}
                                        <div className="flex items-center gap-4">
                                             <picture><img src="Images/hand.png" alt="" /></picture>
                                             <div className="text-[15px]">
                                                  <h1 className="font-extrabold text-primary-blue">
                                                       Facile utilizzo
                                                  </h1>
                                                  <p className="leading-[32px] font-semibold dark:text-white">
                                                       Noterai l'estrema facilità nell'utilizzare il tuo software
                                                       di trading Alfa Advisor©
                                                  </p>
                                             </div>
                                        </div>
                                        {/* <!-- single items --> */}
                                        <div className="flex items-center gap-4">
                                             <picture
                                             ><img src="Images/support.png" alt=""
                                                  /></picture>
                                             <div className="text-[15px]">
                                                  <h1 className="font-extrabold text-primary-blue">
                                                       Assistenza H24
                                                  </h1>
                                                  <p className="leading-[32px] font-semibold dark:text-white">
                                                       Ti garantiremo assistenza prima, durante e dopo la prova o
                                                       l’acquisto di Alfa Advisor©
                                                  </p>
                                             </div>
                                        </div>
                                        {/* <!-- single items --> */}
                                        <div className="flex items-center gap-4">
                                             <picture
                                             ><img src="Images/smiley.png" className="" alt=""
                                                  /></picture>
                                             <div className="text-[15px]">
                                                  <h1 className="font-extrabold text-primary-blue">
                                                       Nessun vincolo
                                                  </h1>
                                                  <p className="leading-[32px] font-semibold dark:text-white">
                                                       Utilizzerai il tuo Alfa Advisor© dove e come vorrai senza
                                                       vincoli di alcun genere
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              {/* <!-- other softwares --> */}
                              <div
                                   className="col-span-1 mt-5 md:mt-0 grid place-content-center space-y-5"
                              >
                                   <h1 className="font-extrabold text-primary-blue">Altri software</h1>
                                   <div
                                        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 place-content-center gap-10 lg:grid-cols-1"
                                   >
                                        {/* <!-- single item --> */}
                                        <div className="flex items-center gap-2">
                                             <img src="Images/check.png " alt="" />
                                             <h1 className="font-bold text-[15px] dark:text-white">
                                                  100% automatico
                                             </h1>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="flex items-center gap-2">
                                             <img src="Images/cross.png " alt="" />
                                             <h1 className="font-bold text-[15px] dark:text-white">
                                                  Garantito a vita
                                             </h1>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="flex items-center gap-2">
                                             <img src="Images/cross.png " alt="" />
                                             <h1 className="font-bold text-[15px] dark:text-white">
                                                  Facile utilizzo
                                             </h1>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="flex items-center gap-2">
                                             <img src="Images/cross.png " alt="" />
                                             <h1 className="font-bold text-[15px] dark:text-white">
                                                  Assistenza H24
                                             </h1>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="flex items-center gap-2">
                                             <img src="Images/cross.png " alt="" />
                                             <h1 className="font-bold text-[15px] dark:text-white">
                                                  Nessun vincolo
                                             </h1>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="flex items-center gap-2">
                                             <img src="Images/cross.png " alt="" />
                                             <h1 className="font-bold text-[15px] dark:text-white">
                                                  Prova gratuita
                                             </h1>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="flex items-center gap-2">
                                             <img src="Images/cross.png " alt="" />
                                             <h1 className="font-bold text-[15px] dark:text-white">
                                                  100% personalizzabile
                                             </h1>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="flex items-center gap-2">
                                             <img src="Images/cross.png " alt="" />
                                             <h1 className="font-bold text-[15px] dark:text-white">
                                                  Controllo totale capitale
                                             </h1>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="flex items-center gap-2">
                                             <img src="Images/cross.png " alt="" />
                                             <h1 className="font-bold text-[15px] dark:text-white">
                                                  Accessibile a chiunque
                                             </h1>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         {/* <!-- clients --> */}
                         <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center mt-14">
                              <div className="">
                                   <h1
                                        className="font-extrabold text-[30px] sm:text-[50px] text-primary-blue"
                                   >
                                        7.015
                                   </h1>
                                   <p className="font-semibold dark:text-white text-[15px] text-center">
                                        Clienti
                                   </p>
                              </div>
                              <div className="">
                                   <h1
                                        className="font-extrabold text-[30px] sm:text-[50px] text-primary-blue"
                                   >
                                        100%
                                   </h1>
                                   <p className="font-semibold dark:text-white text-[15px] text-center">
                                        Soddisfatti
                                   </p>
                              </div>
                              <div className="">
                                   <h1
                                        className="font-extrabold text-[30px] sm:text-[50px] text-primary-blue"
                                   >
                                        100%
                                   </h1>
                                   <p className="font-semibold dark:text-white text-[15px] text-center">
                                        Automatico
                                   </p>
                              </div>
                         </div>
                         {/* <!-- button --> */}
                         <div className="mb-24 flex justify-center">
                              <a aria-label="" href="#purchase">
                                   <div className="main-btn">
                                        <p
                                             className="font-extrabold text-xs text-center sm:text-lg text-white"
                                        >
                                             UNISCITI ORA A TRADING MILLIMETRICO
                                             <sup className="tracking-[5px]">&copy;</sup>
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
               </div>
          </>
     )
}

export default Choose
