import React from 'react'

const CompoundIntrest = () => {
     return (
          <>
               {/* <!-- compound intrest calculate section --> */}
               <div
                    id="computer"
                    className="w-padding sm:scroll-m-44 scroll-m-32 mt-16 md:mt-24 text-center"
               >
                    <div className="max-w">
                         <h1 className="heading">Calcolators</h1>
                         <h1 className="heading-blue viewpoint inline-block">Interesse Composto</h1>

                         {/* <!-- input fields --> */}
                         <div className="mt-14 md:flex gap-3 sm:gap-10 justify-center items-end">
                              {/* <!-- capital --> */}
                              <div className="">
                                   <h1
                                        className="font-extrabold text-[20px] md:text-[32px] text-left text-primary-blue"
                                        for=""
                                   >
                                        Capitale
                                   </h1>
                                   <div
                                        className="flex items-center bg-[#FAFAFA] rounded-[10px] shadow-md py-6 px-11"
                                   >
                                        <svg
                                             onclick="decreaseCapital();Calculate(); graph();"
                                             className="h-10 w-10 cursor-pointer"
                                             xmlns="http://www.w3.org/2000/svg"
                                             aria-hidden="true"
                                             role="img"
                                             preserveAspectRatio="xMidYMid meet"
                                             viewBox="0 0 1024 1024"
                                        >
                                             <path
                                                  fill="#38B6FF"
                                                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"
                                             />
                                        </svg>
                                        <label for=""></label>
                                        <input
                                             oninput="Calculate(); graph(); this.value = Math.abs(this.value)"
                                             type="number"
                                             value="1000"
                                             min="0"
                                             step="100"
                                             name=""
                                             placeholder=""
                                             id="capital"
                                             className="text-center outline-none font-extrabold text-[20px] md:text-[32px] bg-[#FAFAFA] px-6 w-[200px] rounded-md py-2"
                                        />

                                        <svg
                                             onclick="increaseCapital(); Calculate(); graph();"
                                             className="h-12 w-12 cursor-pointer"
                                             xmlns="http://www.w3.org/2000/svg"
                                             aria-hidden="true"
                                             role="img"
                                             preserveAspectRatio="xMidYMid meet"
                                             viewBox="0 0 16 16"
                                        >
                                             <path
                                                  fill="#38B6FF"
                                                  d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm6-3a.5.5 0 0 0-.5.5v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2A.5.5 0 0 0 8 5Z"
                                             />
                                        </svg>
                                   </div>
                              </div>
                              {/* <!-- months --> */}
                              <div className="md:mt-0 mt-3">
                                   <h1
                                        className="font-extrabold text-[20px] md:text-[32px] text-left text-primary-blue"
                                        for=""
                                   >
                                        Mesi
                                   </h1>
                                   <div
                                        className="flex items-center bg-[#FAFAFA] rounded-[10px] shadow-md py-6 px-11"
                                   >
                                        <svg
                                             onclick="decreaseMonth();Calculate(); graph();"
                                             className="h-10 w-10 cursor-pointer"
                                             xmlns="http://www.w3.org/2000/svg"
                                             aria-hidden="true"
                                             role="img"
                                             preserveAspectRatio="xMidYMid meet"
                                             viewBox="0 0 1024 1024"
                                        >
                                             <path
                                                  fill="#38B6FF"
                                                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"
                                             />
                                        </svg>
                                        <label for=""></label>

                                        <input
                                             type="number"
                                             name=""
                                             min="0"
                                             placeholder=""
                                             oninput="Calculate(); graph();this.value==0||this.value<0?this.value=null:this.value"
                                             id="month"
                                             value="12"
                                             className="text-center outline-none font-extrabold text-[32px] md:text-[32px] bg-[#FAFAFA] px-6 w-[200px] rounded-md py-2"
                                        />
                                        <svg
                                             onclick="increaseMonth();Calculate(); graph();"
                                             className="h-12 w-12 cursor-pointer"
                                             xmlns="http://www.w3.org/2000/svg"
                                             aria-hidden="true"
                                             role="img"
                                             preserveAspectRatio="xMidYMid meet"
                                             viewBox="0 0 16 16"
                                        >
                                             <path
                                                  fill="#38B6FF"
                                                  d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm6-3a.5.5 0 0 0-.5.5v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2A.5.5 0 0 0 8 5Z"
                                             />
                                        </svg>
                                   </div>
                              </div>
                         </div>

                         {/* <!-- Profitto mensile --> */}
                         <div className="md:flex justify-center items-center mt-14 gap-3">
                              <div className="flex items-center gap-1">
                                   <label
                                        className="font-extrabold text-[20px] md:text-[32px] text-left text-primary-blue"
                                        for=""
                                   >Profitto mensile(%)</label>

                                   <input
                                        type="number"
                                        min="0"
                                        max="10"
                                        name=""
                                        value="10"
                                        placeholder=""
                                        id="output"
                                        oninput="this.value>10?this.value=10:this.value; inputChanged(this.value); Calculate(); graph();this.value = Math.abs(this.value); "
                                        className="border border-primary-blue text-gray-2 dark:border-none md:text-[32px] text-[20px] w-[80px] px-4 rounded-md py-2"
                                   />
                              </div>
                              {/* <!-- slider --> */}
                              <label for=""></label>
                              <input
                                   className="cursor-pointer w-full md:w-auto mt-3 md:mt-0 flex-grow"
                                   id="slider"
                                   placeholder=""
                                   type="range"
                                   min="1"
                                   max="10"
                                   step="1"
                                   value="10"
                                   oninput="sliderChange(this.value);Calculate(); graph();"
                                   data-orientation="vertical"
                              />
                         </div>

                         <div className="mt-5 border dark:border-none border-primary-blue">
                              {/* <!-- Profit output --> */}
                              <div className="bg-[#FAFAFA] rounded-[10px] shadow-md py-6 px-11">
                                   <h1
                                        className="font-extrabold text-[16px] md:text-[32px] text-left text-primary-blue"
                                        for=""
                                   >
                                        Profitto( <span id="month-no">12</span> Mesi)
                                   </h1>
                                   <div
                                        id="profit"
                                        className="text-left outline-none font-extrabold text-[32px] bg-[#FAFAFA] px-6 rounded-md py-2"
                                   ></div>
                              </div>
                         </div>

                         {/* <!-- bar diagram --> */}
                         <div className="mt-10 md:mt-20">
                              <canvas id="myChart"></canvas>
                         </div>
                         <div className="h-0.5 w-full bg-primary-blue mt-20"></div>
                    </div>
               </div>
          </>
     )
}

export default CompoundIntrest
