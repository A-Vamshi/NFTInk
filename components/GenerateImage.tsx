import React, { useState } from 'react'
import Image from 'next/image'
import { GoogleGenAI, Modality } from "@google/genai";


const GenerateImage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);
  
  const handleClick = (e) => {
    e.preventDefault();
    createImage();
  }
  
  const createImage = async () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const contents = "Create a tattoo image of " + description
    console.log(contents);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: contents,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });
    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        console.log(part.text);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const binaryData = Buffer.from(imageData, 'base64');
        const blob = new Blob([binaryData], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
      }
    }
  }

  return (
    <div className='min-h-[100vh] w-full bg-neutral-900 flex flex-col justify-center items-center gap-5'>
      <div className='text-5xl font-bold font-mono text-center max-w-[75vh]'>
        Generate an art work and create your NFT
      </div>
      <div className='flex items-center justify-center gap-5'>
        <form className='flex flex-col gap-2' onSubmit={handleClick}>
          <div className="border-2 border-t-violet-500 border-l-violet-500 border-b-purple-500 border-r-purple-500 rounded-md">
            <input type='text' placeholder='Create a name.. ' className={`w-full h-full overflow-visible font-bold p-2 flex flex-row items-center justify-center`} onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="border-2 border-t-violet-500 border-l-violet-500 border-b-purple-500 border-r-purple-500 rounded-md">
            <textarea placeholder='Create a description.. ' className={`w-full h-full overflow-visible font-bold p-2 flex flex-row items-center justify-center`} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <input type="submit" value="Create & mint" className='border-2 border-t-violet-500 border-l-violet-500 border-b-purple-500 border-r-purple-500 rounded-md hover:bg-violet-500 hover:cursor-pointer p-2'></input>
        </form>
        <div className='h-[50vh] w-[50vh] border-2 flex items-center justify-center border-t-violet-500 border-l-violet-500 border-b-purple-500 border-r-purple-500 rounded-md'>
          <Image src={image ? image : ""} width={500} height={500} alt="AI Generated Image" />
        </div>
      </div>
      <p className='my-5'>View <a href="https://www.google.com" target='_blank' rel='noreferrer' className='text-blue-600 font-mono'>metadata</a></p>
    </div>
  )
}

export default GenerateImage
/**
  
 */
