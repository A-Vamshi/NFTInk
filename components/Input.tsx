import React from 'react'

interface InputProps {
    type: string,
    placeholder: string,
    className?: string,
}

const Input = ({ type, placeholder, className } : InputProps) => {
  return (
    <>
        <div className="border-2 border-t-violet-500 border-l-violet-500 border-b-purple-500 border-r-purple-500 rounded-md">
            <input type={type} placeholder={placeholder} className={`w-full h-full overflow-visible font-bold ${className}`}></input>
        </div>
    </>
  )
}

export default Input