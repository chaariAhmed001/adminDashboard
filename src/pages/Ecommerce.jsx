import React, { useContext } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { Item } from '@syncfusion/ej2/splitbuttons';
import { appContext } from '../context/appContext';


const Ecommerce = () => {
  const {curentColor} = useContext(appContext);

  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* Earnings */}
        <div className='p-8 pt-9 m-3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 w-full lg:w-80 rounded-lg bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between'>
            <div>
              <p className='font-bold text-gray-400 '>Earnings</p>
              <p className=' text-2xl'>200000DT</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color="white"
              bgColor={ curentColor }
              text="Download"
              borderRadius="10px"
              size='md'
            />
          </div>
        </div>
        {/* cards */}
        <div className='m-3 flex flex-wrap justify-center gap-1'>
          {
            earningData.map((data)=>(
              <div key={data.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 md:w-40 rounded-2xl'>
                <button type='button' style={{color:data.iconColor , backgroundColor: data.iconBg}} className='text-2xl opacity-0.9 p-4 rounded-full hover:drop-shadow-xl'>
                    {data.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>{data.amount}</span>
                  <span className={`text-sm text-${data.pcColor} ml-2 `}>{data.percentage}</span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>{data.title}</p>
              </div>
            ))
          }
        </div>
      </div>
      {/* Revenue updates */}
      <div className='flex flex-wrap justify-center gap-10'>
        <div className='m-3 p-4 rounded-2xl md:w-780 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex gap-2 items-center text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex gap-2 items-center text-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex flex-wrap justify-center'>
            <div className='m-4 pr-10 border-r-1 border-color '>
              <div>
                <p className='flex items-center'>
                  <span className="text-3xl font-semibold">80.000 DT</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className='mt-8'>
                <p className='flex items-center'>
                  <span className="text-3xl font-semibold">28.000 DT</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine currentColor={ curentColor } id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={ curentColor } />
              </div>
            </div>
            <div>
              <Stacked width='320px' height='360px'/>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Ecommerce