import { useState } from 'react'

function Layout({children}) {
  return (
    <>
      <div className='flex flex-col items-center mt-24 mb-4'>
        {children}
      </div>
    </>
  )
}

export default Layout
