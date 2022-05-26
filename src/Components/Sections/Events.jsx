import React from 'react'

const Events = () => {
     return (
          <>
               {/* <!-- events --> */}
               <div className="md:mt-36 mt-16">
                    <div
                         className="bg-gradient-to-b from-event_gradient-light_from to-white dark:from-event_gradient-dark_from dark:via-event_gradient-dark_via dark:to-event_gradient-dark_to pb-24 md:pb-44 flex justify-center text-center"
                    >
                         <div className="">
                              <h1 className="heading mt-14">
                                   Prossimi <span className="heading-blue viewpoint">Eventi</span>
                              </h1>
                              <div
                                   className="grid md:grid-cols-2 p-3 mt-10 md:mt-16 lg:gap-y-0 gap-y-28 gap-8 lg:grid-cols-3"
                              >
                                   {/* <!-- single item --> */}
                                   <div className="relative">
                                        <picture
                                        ><img
                                                  loading="lazy"
                                                  className="rounded-t-xl h-full w-full"
                                                  src="Images/event1.png"
                                                  alt=""
                                             /></picture>
                                        <div className="bg-white -bottom-[5.5rem] p-6 absolute rounded-3xl">
                                             <p className="text-lg text-left font-semibold">
                                                  Go to the millions Trading Millimetrico
                                             </p>
                                             <div className="flex mt-1 items-center justify-between">
                                                  <div className="flex items-center gap-1">
                                                       <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                            role="img"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 0 16 16"
                                                       >
                                                            <g fill="currentColor">
                                                                 <path
                                                                      d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                                                                 />
                                                                 <path
                                                                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                                                                 />
                                                            </g>
                                                       </svg>
                                                       <p className="text-lg font-normal">23 Giugno, 2022</p>
                                                  </div>

                                                  <a aria-label="" href="">
                                                       <div
                                                            className="btn_gradient rounded-md flex items-center gap-2 py-[10px] px-4"
                                                       >
                                                            <p className="text-white font-extrabold text-sm">DETTAGLI</p>
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
                                   {/* <!-- single item --> */}
                                   <div className="relative">
                                        <picture
                                        ><img
                                                  loading="lazy"
                                                  className="rounded-t-xl h-full w-full"
                                                  src="Images/event1.png"
                                                  alt=""
                                             /></picture>
                                        <div className="bg-white -bottom-[5.5rem] p-6 absolute rounded-3xl">
                                             <p className="text-lg text-left font-semibold">
                                                  Go to the millions Trading Millimetrico
                                             </p>
                                             <div className="flex mt-1 items-center justify-between">
                                                  <div className="flex items-center gap-1">
                                                       <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                            role="img"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 0 16 16"
                                                       >
                                                            <g fill="currentColor">
                                                                 <path
                                                                      d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                                                                 />
                                                                 <path
                                                                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                                                                 />
                                                            </g>
                                                       </svg>
                                                       <p className="text-lg font-normal">23 Giugno, 2022</p>
                                                  </div>

                                                  <a aria-label="" href="">
                                                       <div
                                                            className="btn_gradient rounded-md flex items-center gap-2 py-[10px] px-4"
                                                       >
                                                            <p className="text-white font-extrabold text-sm">DETTAGLI</p>
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
                                   {/* <!-- single item --> */}
                                   <div className="relative">
                                        <picture
                                        ><img
                                                  className="rounded-t-xl h-full w-full"
                                                  loading="lazy"
                                                  src="Images/event1.png"
                                                  alt=""
                                             /></picture>
                                        <div className="bg-white -bottom-[5.5rem] p-6 absolute rounded-3xl">
                                             <p className="text-lg text-left font-semibold">
                                                  Go to the millions Trading Millimetrico
                                             </p>
                                             <div className="flex mt-1 items-center justify-between">
                                                  <div className="flex items-center gap-1">
                                                       <svg
                                                            className="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                            role="img"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 0 16 16"
                                                       >
                                                            <g fill="currentColor">
                                                                 <path
                                                                      d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                                                                 />
                                                                 <path
                                                                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                                                                 />
                                                            </g>
                                                       </svg>
                                                       <p className="text-lg font-normal">23 Giugno, 2022</p>
                                                  </div>

                                                  <a aria-label="" href="">
                                                       <div
                                                            className="btn_gradient rounded-md flex items-center gap-2 py-[10px] px-4"
                                                       >
                                                            <p className="text-white font-extrabold text-sm">DETTAGLI</p>
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
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Events
