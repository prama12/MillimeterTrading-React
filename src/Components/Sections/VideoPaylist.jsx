import React from 'react'

const VideoPaylist = () => {
     return (
          <>
               {/* <!-- video playlist --> */}
               <div
                    id="we_reviewed"
                    className="w-padding md:mt-24 mt-16 sm:scroll-m-44 scroll-m-32"
               >
                    <div className="max-w">
                         <div className="text-center">
                              <h1 className="heading">
                                   Cosa pensa chi utilizza
                                   <span className="heading-blue viewpoint">Alfa Advisor ©</span>
                              </h1>
                         </div>
                         <div className="vid-main-wrapper flex justify-center mt-10 h-full">
                              {/* <!-- THE  PLAYER --> */}
                              <div className="md:flex h-full">
                                   <div className="bg-black flex justify-center w-full md:w-[650px]">
                                        <video
                                             className="md:h-[50vh] h-[70vh]"
                                             autoplay
                                             controls
                                             id="vid_frame"
                                        >
                                             <source src="./assets/videos/video1.mp4" type="video/mp4" />
                                        </video>
                                   </div>

                                   {/* <!-- THE PLAYLIST --> */}
                                   <div className="vid-list-container w-full md:w-[50%]">
                                        <div
                                             className="md:flex justify-between border-t-2 border-b-2 px-3 py-4 border-primary-blue"
                                        >
                                             <h1 className="text-[15px] font-extrabold dark:text-white">
                                                  Playlist
                                             </h1>
                                             <h1 className="text-[15px] dark:text-white font-extrabold">
                                                  10 Videos
                                             </h1>
                                        </div>
                                        <ol id="vid-list">
                                             {/* <!-- first --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video1.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/jessicia.webp"
                                                            /></span>
                                                       <div className="desc">Jessicia</div>
                                                  </a>
                                             </li>
                                             {/* <!-- second --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video2.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/Claudia.webp"
                                                            /></span>
                                                       <div className="desc">Claudia</div>
                                                  </a>
                                             </li>
                                             {/* <!-- third --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video3.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/Marina.webp"
                                                            /></span>
                                                       <div className="desc">Marina</div>
                                                  </a>
                                             </li>
                                             {/* <!-- fourth --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video4.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/Michele.webp"
                                                            /></span>
                                                       <div className="desc">Michele</div>
                                                  </a>
                                             </li>
                                             {/* <!-- fifth --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video5.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/one.webp"
                                                            /></span>
                                                       <div className="desc">Giulia</div>
                                                  </a>
                                             </li>
                                             {/* <!-- sixth --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video6.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/fabio.webp"
                                                            /></span>
                                                       <div className="desc">Fabio</div>
                                                  </a>
                                             </li>
                                             {/* <!-- seventh --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video7.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/roger.webp"
                                                            /></span>
                                                       <div className="desc">Roger</div>
                                                  </a>
                                             </li>
                                             {/* <!-- eight --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video8.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/Sofia.webp"
                                                            /></span>
                                                       <div className="desc">Sofia</div>
                                                  </a>
                                             </li>
                                             {/* <!-- nine --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video9.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/ Luca.webp"
                                                            /></span>
                                                       <div className="desc">Luca</div>
                                                  </a>
                                             </li>
                                             {/* <!-- ten --> */}
                                             <li>
                                                  <a
                                                       aria-label=""
                                                       href="javascript:void();"
                                                       onClick="document.getElementById('vid_frame').src='./assets/videos/video10.mp4'"
                                                  >
                                                       <span className="vid-thumb"
                                                       ><img
                                                                 alt=""
                                                                 width="72"
                                                                 src="./assets/videos/thumbnail/Alessia.webp"
                                                            /></span>
                                                       <div className="desc">Alessia</div>
                                                  </a>
                                             </li>
                                        </ol>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default VideoPaylist
