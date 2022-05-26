import React from 'react'

const MarqueItem = ({ titel, Value, MarqueCss, arrow }) => {
     return (
          <>
               <p className="currency box">
                    {titel}
                    <span className="">=</span>
                    <span className={`${MarqueCss}`}>
                         <span>{Value}</span>
                         <span>{arrow}</span>
                    </span>
               </p>
          </>
     )
}

export default MarqueItem
