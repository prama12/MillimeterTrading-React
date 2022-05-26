import React from 'react'

const Map = () => {
     return (
          <>
               {/* <!-- map --> */}
               <div className="w-padding mt-2">
                    <div className="max-w">
                         <a
                              target="_blank"
                              aria-label="map"
                              href="https://www.google.com/maps/place/Av.+Touroperador+Neckermann,+35100,+Las+Palmas,+Spain/@27.7537999,-15.5914576,17z/data=!4m2!3m1!1s0xc3f62ca6f1cf5ef:0x322d1b85d2688af4"
                         >
                              <picture
                              ><img src="Images/map.webp" loading="lazy" alt=""
                                   /></picture>
                         </a>
                    </div>
               </div>
          </>
     )
}

export default Map
