import React from 'react';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="bg-[#1F2029]">
       <div class="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between justify-start">
          <div class="mb-6 md:mb-0 md:text-center">
            <a href="#" >
              <img src={logo} className="sm:h-40 sm:mx-64 w-30 me-3 mb-4 md:h-48  mx-64 md:mx-0  h-2/5 ml-0 " alt="EJE" />
              <br/>
              <p className="text-[#F1EFE2] font-brush text-2xl text-left sm:text-center">always striving for greatness</p>
            </a>
           
          </div>
          <div className="grid inset-x-0  grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 text-left sm:text-center  ">
            <div>
              <h2 className="mb-6 text-xl hover:text-[#2DA2DD] font-photograph text-[#2DA2DD] uppercase flex-start">Pages</h2>
              
              <ul class="text-gray-500  font-medium flex-start grid grid-cols-2 sm:grid-cols-1 ">
              <li >
                <a href="#" class="hover:underline text-[#F1EFE2] font-photograph  text-xl hover:text-[#2DA2DD] hover:text-[#2DA2DD] ">Acceuil</a>
            </li>
            <li >
                <a href="#" class="hover:underline text-[#F1EFE2] font-photograph  text-xl hover:text-[#2DA2DD] hover:text-[#2DA2DD] ">About us</a>
            </li>
            <li>
                <a href="#" class="hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">News</a>
            </li>
            <li>
                <a href="#" class="hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">Services</a>
            </li>
            <li>
                <a href="#" class="hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">Events</a>
            </li>
            <li>
                <a href="#" class="hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">Contact</a>
            </li>
        
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl hover:text-[#2DA2DD] font-photograph text-[#2DA2DD] uppercase text-xl hover:text-[#2DA2DD]">Legal mention</h2>
              <ul className="text-gray-500 font-photograph grid  grid-cols-2 sm:grid-cols-1">
              
                      <li >
                          <a href="#" class="hover:underline text-[#F1EFE2]  font-photograph text-xl hover:text-[#2DA2DD] className='bg-[#2DA2DD] sm:w-auto h-px'">Status</a>
                      </li>
                     
                      <li>
                          <a  href="#" class="hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">Financial report</a>
                          <ul class='text-[#F1EFE2]'>
                            <li class='text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]'>2023-2024</li>
                            <li class='text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]'>2022-2023</li>
                            <li class='text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]'>2021-2022</li>
                          </ul>
                      
                      </li>
                      <li >
                          <a  href="#" class="hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD] ">Moral Report</a>
                      </li>
              </ul>
              
            </div>
            <div>
              <h2 className="mb-6 text-xl hover:text-[#2DA2DD] font-semibold text-[#2DA2DD] uppercase font-photograph">Contact</h2>
              <ul class="text-gray-500  font-medium">
                      <li >
                          <a href="#" class="hover:underline text-[#F1EFE2] font-photograph">ensi-juniorEntreprise@gmail.tn</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline text-[#F1EFE2] font-photograph ">+216 12 345 678</a>
                      </li>
                 
                 <li className='mt-4' > <div class="flex sm:justify-center justify-start gap-6 ">
    <a class="text-[#1F2029] " aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7 w-7 bg-[#2DA2DD] rounded">
            <path fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
            </path>
        </svg>
    </a>
    
    <a class="text-[#1F2029] " aria-label="Visit TrendyMinds Facebook" href="" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-7 w-7 bg-[#2DA2DD] rounded">
            <path fill="currentColor"
                d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
            </path>
        </svg>
    </a>
    <a class="text-[#1F2029] " aria-label="Visit TrendyMinds Instagram" href="" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"class="h-7 w-7 bg-[#2DA2DD] rounded">
            <path fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
            </path>
        </svg>
    </a>
   
</div> </li>  </ul>
              </div>
           
             
          </div>
        </div>
        <hr className="my-9 border-t-2 border-b-2 border-gray-200 w-full lg:my-9 lg:w-full" />

        {/* Centered Text */}
        <div className="sm:flex sm:items-center sm:justify-center ml-7">
          <span className="text-xl hover:text-[#2DA2DD] text-gray-500 sm:text-center text-[#F1EFE2]">
            © 2023 <a href="#" className="hover:underline"></a>. All Rights Reserved ENSI JE 2023
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;