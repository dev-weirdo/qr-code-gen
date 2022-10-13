import React, { useState } from 'react'
import QRCode from 'qrcode'

const Qr = () => {
  const [inpUrl, setInpUrl] = useState('')
  const [img, setImg] = useState('')

  const options = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    width: 400,
    margin: 1,
    color: {
      dark: '#1B2430FF',
      light: '#FFF8EAFF'
    }
  }

  const handleGen = () => {
    QRCode.toDataURL(inpUrl, options, (err, url) => {
      if (err) throw err
      setImg(url)
    })

    setInpUrl('')
  }

  return (
    <div className='px-2 py-10 space-y-10'>
      <div>
        <h1 className='text-4xl md:text-5xl italic text-center'>Qr Code Generator</h1>
        <div className='flex justify-center items-center md:w-1/2 mx-auto pt-10 pb-3 gap-5 border-b border-black'>
          <input
            placeholder='Paste text/link here...'
            value={inpUrl}
            onChange={e => setInpUrl(e.target.value)}
            className='px-3 py-1 outline-none bg-transparent placeholder-white text-lg'
            type='text'
          />

          <button
            onClick={handleGen}
            className='relative inline-block text-lg group'
          >
            <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
              <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
              <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
              <span className='relative'>Generate</span>
            </span>
            <span
              className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
              data-rounded='rounded-lg'
            ></span>
          </button>
        </div>
      </div>
      {img && (
        <div className='mx-auto w-96 flex flex-col items-center justify-center gap-5'>
          <img src={img} alt='qrcode' />
          <button className='bg-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
            <svg
              className='fill-current w-4 h-4 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
            </svg>
            <a href={img} type='image/jpeg' download='qrcode'>
              <span>Download</span>
            </a>
          </button>
        </div>
      )}
    </div>
  )
}

export default Qr
