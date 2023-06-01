import React from 'react'

const Header = ({title , description}) => {
  return (
    <div className=' h-1/3 bg-gray-500  ' >
        <div className='italic  text-slate-200 w-1/3 justify-center h-full  pt-44  text-right ' >
            <div data-testid='header-title' className='text-8xl font-semibold' >
                {title}
            </div>
            <div data-testid='header-desc' className=' text-lg font-thin text-gray-500 ' >
                {description}
            </div>
        </div>
    </div>
  )
}

export default Header