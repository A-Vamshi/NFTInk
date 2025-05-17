import React from 'react'
import Image from 'next/image'
import favi from "../app/favicon.ico"

const GenerateImage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Submitting... ")
  }
  return (
    <div className='min-h-[100vh] w-full bg-neutral-900 flex flex-col justify-center items-center gap-5'>
      <div className='text-5xl font-bold font-mono text-center max-w-[75vh]'>
        Generate an art work and create your NFT
      </div>
      <div className='flex items-center justify-center gap-5'>
        <form className='flex flex-col gap-2' onSubmit={handleClick}>
          <div className="border-2 border-t-violet-500 border-l-violet-500 border-b-purple-500 border-r-purple-500 rounded-md">
            <input type='text' placeholder='Create a name.. ' className={`w-full h-full overflow-visible font-bold p-2 flex flex-row items-center justify-center`}></input>
          </div>
          <div className="border-2 border-t-violet-500 border-l-violet-500 border-b-purple-500 border-r-purple-500 rounded-md">
            <textarea placeholder='Create a description.. ' className={`w-full h-full overflow-visible font-bold p-2 flex flex-row items-center justify-center`}></textarea>
          </div>
          <input type="submit" value="Create & mint" className='border-2 border-t-violet-500 border-l-violet-500 border-b-purple-500 border-r-purple-500 rounded-md hover:bg-violet-500 hover:cursor-pointer p-2'></input>
        </form>
        <div className='h-[50vh] w-[50vh] border-2 flex items-center justify-center border-t-violet-500 border-l-violet-500 border-b-purple-500 border-r-purple-500 rounded-md'>
          <Image src={""} alt="AI Generated Image" />
        </div>
      </div>
      <p className='my-5'>View <a href="https://www.google.com" target='_blank' rel='noreferrer' className='text-blue-600 font-mono'>metadata</a></p>
    </div>
  )
}

export default GenerateImage
/**
  
 */