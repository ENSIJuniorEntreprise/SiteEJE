import React from 'react'
import equipe from '../assets/equipe.jpg'
function Newsletter() {
  return (
    <div class="relative">
    <img src={equipe} alt="Background " class="w-full h-80 object-cover"/>
    <div class=" absolute inset-0 bg-[#2DA2DD] bg-opacity-50 p-20">
       <h1 class="text-[#1F2029] font-medium text-3xl md:text-4xl sm:text-2xl text-center">Subscribe to our Newsletter</h1>
      <div className=" mb-2 flex flex-wrap   mt-8 inset-0 flex items-center justify-center ">
        
                    <input
                        type="search"
                        className=" h-16 bg-[#F1EFE2]  rounded-l border border-solid  flex items-center justify-center w-4/6 md:w-3/6 "
                      
                        aria-describedby="button-addon3" />

                  
                    <button
                        className=" h-16  bg-[#1F2029] text-white px-6 py-2 text-xs font-medium uppercase md:w-1/6 w-2/6 "
                        type="button"
                        id="button-addon3  flex items-center justify-center">
                       Join
                    </button>  
                 
                </div></div>
    
</div>
   
            
 
  )
}

export default Newsletter;