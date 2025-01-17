import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className='fixed top-0 w-full  flex justify-between items-center'>
        <div className='flex'>
            
            <div className='px-2'><DensityMediumIcon /></div>
            <Link to={'/'}>
            
            <span className='font-bold text-red-600'>My</span>
            <span className='font-bold' text-gray-600>Tube</span>

            </Link>
            </div>
        
        <div>

            <input className='border-2 px-3 pr-44' type='text ' placeholder='Search here'  />
            <button className='border-2 bg-gray-200 px-4 '><SearchOutlinedIcon/></button>


        </div>

        <div className='m-1'> 
            <Link to={'/upload'}><button className=' rounded-md bg-gray-200 px-2 py-1'>Upload</button></Link>
            <button className='text-white rounded-md bg-blue-500 px-2 py-1 mx-2'>Sign in</button>
        </div>


        

        </div>
  )
}

export default NavBar