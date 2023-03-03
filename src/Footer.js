import React from 'react'
import { IoLocation, IoMail } from 'react-icons/io5'

const Footer = () => {
    return (
        <div className='text-gray-400 flex flex-col items-center justify-center'>
            <p> Dsigned by Koushik Dandapat </p>
            <p> Copyright © {new Date().getFullYear()}</p>
            <div className='flex flex-row  mt-2'><IoMail/> <p className='ml-3'>koushikdandapat16@gmail.com</p> </div>
            <div className='flex flex-row  mt-2'><IoLocation/> <p className='ml-3'>Midnapore , West Bengal</p> </div>
           
            

        </div>
    )
}

export default Footer