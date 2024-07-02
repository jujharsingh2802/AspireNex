import React from 'react'

function Loading( className="") {
  return (
    <div className={`${className} App flex items-center justify-center p-0.5 m-0 outline-none w-full  min-h-screen bg-black`}>
        <div className="loading-image-container justify-center">
                  <img
              src="images/loading-image.gif"
              alt="Loading"
              className="loading-image"
            />
            
        </div>    
     </div>
  )
}

export default Loading