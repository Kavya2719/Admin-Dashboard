import React from 'react'
import { BsCurrencyRupee } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine} from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-100 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 m-3 pt-9 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='flex justify-between item-center'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
          </div>

          <div className='mt-6'>
            <Button color="white" bgColor={currentColor}  text="Download" borderRadius="10px" size="md" />
          </div>
        </div>

        <div className='flex m-3 justify-center gap-1 items-center flex-wrap'>
          {
            earningData.map((item) => {
              return <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl' >
                <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg}} className='rounded-full p-4 hover:drop-shadow-xl opacity-0.9 text-2xl'>
                  {item.icon}
                </button>

                <p className='mt-3'>
                  <span className='text-lg font-semibold'>{item.amount}</span>
                  <span className={`text-sm text-red-600 ml-2`}>{item.percentage}</span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>
                  {item.title}
                </p>
              </div>
            })
          }
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
            <div className='flex justify-between'>
              <p className='font-semibold text-xl'>
                Revenue Updates
              </p>
              <div className='flex items-center gap-4'>
                <p className='flex gap-2 items-center text-gray-600 hover:drop-shadow-xl'>
                  <span><GoDotFill /></span>
                  <span>Expense</span>
                </p>
                <p className='flex gap-2 items-center text-green-400 hover:drop-shadow-xl'>
                  <span><GoDotFill /></span>
                  <span>Budget</span>
                </p>
              </div>
            </div>

            <div className='mt-10 flex justify-center gap-10 flex-wrap'>
              <div className='border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>$93,438</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>

                <div className='mt-8'>
                  <p className='text-3xl font-semibold'>$48,487</p>
                  <p className='text-gray-500 mt-1'>Expense</p>
                </div>

                <div className='mt-5'>
                  <SparkLine currentColor={currentColor}  id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor}  />
                </div>

                <div className='mt-10'>
                  <Button color="white" bgColor={currentColor} text="Download Report" borderRadius="10px" />
                </div>
              </div>

              <div>
                <Stacked width="320px" height="360px" />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Ecommerce