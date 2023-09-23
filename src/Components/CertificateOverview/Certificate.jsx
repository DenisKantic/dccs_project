import React from 'react'
import Header from '../Header/Header'

const Certificate = () => {
  return (
    <div className='flex flex-2'>
        <Header />
        <main className='h-screen w-full p-10'>
            <div className='mt-10 bg-purple-400 h-full flex flex-col items-center'>
            <h1 className='pt-10 text-4xl'>Certificate Overview</h1>
            </div>
        </main>
    </div>
  )
}

export default Certificate