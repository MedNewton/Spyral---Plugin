/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
//import spyralLogoDark from './assets/logo-dark.svg'
import spyralLogoLight from './assets/logo-light.svg'
import bg from './assets/bg1.jpg'
import { BsArrowRight } from "react-icons/bs";

function App() {


  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <main className=' bg-black p-0 m-0 w-screen h-full min-h-screen overflow-x-hidden'>
        <div className='w-full h-screen flex flex-row items-center justify-stretch p-10'>
          <div className='w-7/12 h-full flex-col items-center justify-start px-8'>
            <div className='w-full h-fit flex flex-row items-center justify-between'>
              <img src={spyralLogoLight} alt="" className='w-12' />
              <a href="http://spyral.studio/" target='_blank'>
                <div className='w-fit h-fit flex flex-row items-center justify-end gap-2'>

                  <h5 className=' text-white text-lg p-0 m-0 hover:text-[#8A8A8A]'>Visit Homepage</h5>
                  <BsArrowRight color="#FFFFFF" size={18} className='mt-1' />
                </div></a>

            </div>
            <div className='w-full h-fit flex flex-row items-center justify-start mt-10 '>
              <h2 className='text-white font-medium text-4xl leading-tight w-fit '>Welcome to Spyral plugin</h2>
            </div>
            <div className='w-full h-fit flex flex-row items-center justify-start mb-6 mt-3'>
              <p className='text-[#8A8A8A] font-medium text-lg leading-tight w-fit '>Modern&nbsp;&#9679;&nbsp;Seamless&nbsp;&#9679;&nbsp;Transparent</p>
            </div>
            <div className='w-full h-fit flex flex-col items-center justify-start mt-10 gap-2 '>
              <div className=' bg-[#1C1C1C] p-4 rounded-md h-fit w-2/3 flex flex-row items-center justify-start gap-4'>
                <div className='h-14 aspect-square bg-[#262626] rounded-full'></div>
                <div className='w-fit h-fit flex flex-col items-start justify-center'>
                  <p className=' text-white text-md font-medium'>Seamless Identity Management</p>
                  <p className=' text-[#8A8A8A] text-sm w-11/12'>Thanks to web3 technologies, identity management is made seamless, allowing users to create and access their accounts in few seconds</p>
                </div>

              </div>
              <div className=' bg-[#1C1C1C] p-4 rounded-md h-fit w-2/3 flex flex-row items-center justify-start gap-4'>
                <div className='h-14 aspect-square bg-[#262626] rounded-full'></div>
                <div className='w-fit h-fit flex flex-col items-start justify-center'>
                  <p className=' text-white text-md font-medium'>Simplified Licensing Structures</p>
                  <p className=' text-[#8A8A8A] text-sm w-11/12'>Using blockchain and smart contracts to streamline processes, ensuring timely and accurate royalty payouts. Empower artists to control licensing terms, duration, and recipients.</p>
                </div>

              </div>
              <div className=' bg-[#1C1C1C] p-4 rounded-md h-fit w-2/3 flex flex-row items-center justify-start gap-4'>
                <div className='h-14 aspect-square bg-[#262626] rounded-full'></div>
                <div className='w-fit h-fit flex flex-col items-start justify-center'>
                  <p className=' text-white text-md font-medium'>AI Matching System</p>
                  <p className=' text-[#8A8A8A] text-sm w-11/12'>Utilize AI to match artists with distributors in our aggregated marketplace according to their needs, ensuring low fees and efficient processes, fostering better partnerships and maximizing artist potential.</p>
                </div>

              </div>
            </div>
          </div>
          <div className='w-5/12 h-full flex-col items-center justify-start px-6'>
            <div className='right w-full rounded-2xl flex flex-col items-end justify-between py-5 px-5'>
              <div className=' bg-black w-6/12 h-fit flex flex-row items-center justify-between rounded-lg p-1'>
                <div className='w-1/2 h-fit flex flex-row items-center justify-center p-1'>
                  <p className=' text-white text-md font-medium'>Login</p>
                </div>
                <div className='w-1/2 bg-white h-fit flex flex-row items-center justify-center p-1 rounded-md'>
                  <p className=' text-black text-md font-medium'>Register</p>
                </div>
              </div>
              <div className='w-full h-fit flex flex-row items-center justify-center'>
              <p className='text-black font-medium text-xs leading-tight w-fit '><a href="/" className='text-black'>Terms & conditions</a>&nbsp;&nbsp;&#9679;&nbsp;&nbsp;<a href="/" className='text-black hover:text-[#8A8A8A]'>Privacy policy</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
