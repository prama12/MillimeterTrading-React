import React from 'react'
import MarqueItem from '../Common/MarqueItem'
import MarqueVal from '../Common/MarqueVal'

const Header = () => {
     return (
          <>
               <div className="flex overflow-x-hidden">
                    <div className="flex py-2 gap-10 animate-marquee whitespace-nowrap">
                         {MarqueVal.map((val, index) => {
                              console.log(index)
                              return (
                                   <MarqueItem
                                        key={val.id}
                                        {...val}
                                   />
                              )
                         })}
                    </div>
               </div>
          </>
     )
}

export default Header
