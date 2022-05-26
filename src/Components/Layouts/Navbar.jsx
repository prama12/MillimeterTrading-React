import React from 'react'

const Navbar = () => {
     return (
          <>
               <div
                    className="w-padding bg-opacity-50 hover-animation backdrop-blur-[15px] backdrop-filter firefox:bg-opacity-90 sticky top-0 z-30"
               >
                    <div id="navbar" className="hover-animation">
                         <div
                              className="max-w flex items-center justify-between lg:justify-center xl:gap-5 gap-10 mt-[26px]"
                         >
                              <div className="flex items-center gap-10">
                                   {/* logo */}
                                   <div className="">
                                        <a aria-label="index" href="./index.html">
                                             <picture>
                                                  <img
                                                       src="Images/logo.png"
                                                       className="sm:h-32 h-20 w-20 sm:w-32"
                                                       alt="logo"
                                                  />
                                             </picture>
                                        </a>
                                   </div>
                                   {/* nav-links */}
                                   <div>
                                        <ul className="lg:flex hidden gap-7 relative z-10 items-center">
                                             <li className="">
                                                  <a aria-label="home" href="#home" className="nav-items nav-active">Home</a>
                                             </li>
                                             <li>
                                                  <a aria-label="chi siamo" className="nav-items" href="#who_we_are">Chi Siamo</a>
                                             </li>
                                             <li>
                                                  <a aria-label="computer" className="nav-items" href="#computer">Calcolatore</a>
                                             </li>
                                             <li>
                                                  <a aria-label="lavora" className="nav-items" href="#work_with_us">Lavora Con Noi</a>
                                             </li>
                                             <li>
                                                  <a aria-label="faq" className="nav-items" href="#faq">FAQ</a>
                                             </li>
                                             <li>
                                                  <a
                                                       aria-label="Recensinoi"
                                                       className="nav-items"
                                                       href="#we_reviewed"
                                                  >Recensinoi</a>
                                             </li>
                                             <li>
                                                  <a aria-label="contacts" className="nav-items" href="#contacts"
                                                  >Contatti</a>
                                             </li>
                                             <li
                                                  className="border-2 border-primary-blue rounded-md hover:scale-110 hover-animation"
                                             >
                                                  <a
                                                       aria-label="myfxbook"
                                                       href="#myfxbook"
                                                       className="flex py-2 px-8 items-center gap-3"
                                                  >
                                                       <picture
                                                       ><img
                                                                 id="myfxbookimg"
                                                                 src="Images/myfxbook.png"
                                                                 className="h-full w-full object-cover"
                                                                 alt="fxbook"
                                                            /></picture>
                                                       <img
                                                            src="Images/right-arrow.svg"
                                                            className="h-5 w-5 object-cover"
                                                            alt=""
                                                       />
                                                  </a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                              <div
                                   className="flex items-center gap-2 md:gap-10 lg:absolute lg:-right-20"
                              >
                                   {/* dark mode button */}
                                   <div
                                        id="dark"
                                        className="p-1 bg-primary-blue w-10 md:w-14 rounded-full cursor-pointer"
                                   >
                                        <div
                                             className="rounded-full hover-animation cursor-pointer transform"
                                        >
                                             {/* sun */}
                                             <div
                                                  id="sun"
                                                  className="bg-white dark:bg-primary-dark_body hover-animation rounded-full w-4 h-4 md:w-6 md:h-6 flex justify-center items-center relative group"
                                             >
                                                  <img id="sunImg" src="Images/sun.svg" alt="" />
                                             </div>
                                        </div>
                                   </div>
                                   {/* menu */}
                                   <div onclick="toggleSidebar()">
                                        <svg
                                             className="h-8 w-8 flex text-black dark:text-white lg:hidden"
                                             xmlns="http://www.w3.org/2000/svg"
                                             aria-hidden="true"
                                             role="img"
                                             preserveAspectRatio="xMidYMid meet"
                                             viewBox="0 0 16 16"
                                        >
                                             <path
                                                  fill="red"
                                                  stroke="currentColor"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  stroke-width="1.5"
                                                  d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                                             />
                                        </svg>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Navbar
