import React, { useState } from 'react'
import Image from 'next/image'
import { GoogleGenAI, Modality } from "@google/genai";
import Spinner from "react-bootstrap/Spinner";


const GenerateImage = ({ mint } : { mint: (args: string) => void }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  
  const handleClick = (e) => {
    e.preventDefault();
    if (name == "" || description == "") {
      window.alert("Please enter the name and description");
      return;
    }
    const data = createImage();
  }
  
  // const uploadData = async (imageData) => {
  //   console.log("Uploading image");
  //   const nftStorage = new NFTStorage({ token: process.env.NFT_STORAGE_API_KEY as string });
  //   const { ipnft } = await nftStorage.store({
  //     image: new File([imageData], "image.jpeg", { type : "image/jpeg"}),
  //     name: name,
  //     description:  description
  //   });
  //   const url = `https://ipfs.io/ipfs/${ipnft}/metadata.json`;
  //   setUrl(url);
  //   return url;
  // }
  
  const createImage = async () => {
    setIsLoading(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const contents = "Create a tattoo image of " + description;
    let imageUrl;
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
        imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
        setUrl(imageUrl);
      }
    }
    // const url = uploadData(imageUrl);
    await mint(url);
    setIsLoading(false);
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
          <div className='flex justify-center items-center w-full h-full'>
            {
              !image && isLoading ? (
                <p className='text-2xl font-bold'>Loading...</p>
              ) : !image && !isLoading ? (
                <p className='text-2xl font-bold text-center'>Enter the deatils and mint your NFT now!</p>
              ) : (
                <Image src={image} alt="AI Generated tattoo" width={500} height={500} />
              )
            }
          </div>
        </div>
      </div>
        {url ? <p className='text-fuchsia-600 text-2xl m-5 font-mono'>Your nft has been created!</p> : <></>}
    </div>
  )
}

export default GenerateImage;