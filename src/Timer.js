import React from 'react';

const Timer=()=> {
    
      return (
       
         <div className='body-time' >
         
             <div className="numbers">
                 
                 <h1>00</h1>
                 <h1>:</h1>
                 <h1>30</h1>
                 <h1>:</h1>
                 <h1>00</h1>
                 
             </div>
         
             <div className="names">
             
                  <h2>Hour</h2>
                  <h2>Minute</h2>
                  <h2>Second</h2>
             
             </div>
         
         </div>
       
      );
    
  }

  export default Timer;