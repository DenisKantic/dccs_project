import React from 'react'
import Header from '../Header/Header'

const Home = () => {
  return (
    <div className='flex flex-2'>
        <Header />
        <main className='h-screen w-full p-10'>
        <h1 className='text-4xl mt-10'>Start</h1>
        </main>
    </div>
  )
}

export default Home