import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useContext } from 'react'
import { BsCheck } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import { themeColors } from '../data/dummy'
import { appContext } from '../context/appContext';

const ThemeSettings = () => {
  const {curentColor,setCurentColor,curentMode,setCurentMode,themeSettings, setThemeSettings,setMode,setColor} = useContext(appContext)
  return (
    <div className='bg-half-transparent w-screen fixed top-0 right-0 nav-item'>
      <div className=' h-screen w-350 bg-white float-right dark:text-gray-200 dark:[#484B52] '>
        <div className='flex items-center justify-between p-4 ml-4'>
          <p className='font-semibold text-xl'>Settings</p>
          <button type='button' onClick={()=>{setThemeSettings(false)}} style={{color: 'rgb(153,171,180)'}}  className='p-3 text-2xl hover:drop-shadow-lg hover:bg-light-gray rounded-full'>
            <MdOutlineCancel />
          </button>
        </div>
        <div className='p-4 ml-4 flex-col border-t-1 border-color'>
          <p className='font-semibold text-lg'>Them options</p>
          <div className='mt-4'>
            <input type='radio' id='ligth' name='theme' value='Ligth' className='cursor-pointer' onChange={setMode} checked={curentMode==='Ligth'} />
            <label htmlFor='ligth' className='ml-2 text-md cursor-pointer'>Ligth</label>
          </div>
          <div className='mt-4'>
            <input type='radio' id='dark' name='theme' value='Dark' className='cursor-pointer' onChange={setMode} checked={curentMode==='Dark'} />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>Dark</label>
          </div>
        </div>
        <div className='p-4 ml-4 flex-col border-t-1 border-color'>
          <p className='font-semibold text-lg'>Them Colors</p>
          <div className='flex gap-2'>
            {
              themeColors.map((item,key)=>
              <TooltipComponent key={key} content={item.name} position='TopCenter'>
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button className={` h-10 w-10 rounded-full cursor-pointer`} style={{backgroundColor: item.color}} onClick={()=>{setColor(item.color)}}>
                  <BsCheck className={`ml-2 text-2xl text-white ${item.color === curentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings