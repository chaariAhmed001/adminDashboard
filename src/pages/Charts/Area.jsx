import React, { useContext } from 'react'
import { Header } from '../../components'
import { ChartComponent, DateTime, Inject, Legend, SplineAreaSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { appContext } from '../../context/appContext'

const Area = () => {
  const {curentMode} = useContext(appContext);

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg'>
      <Header category='Charts' text='Inflation Rate'/>
      <ChartComponent
        id='area-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{border:{width:0}}}
        background={curentMode === 'Dark' ? "#33373E" : "#fff"}
        >
          <Inject services={[SplineAreaSeries, DateTime,Legend]} />
          <SeriesCollectionDirective>
            {
              areaCustomSeries.map((item,key)=><SeriesDirective key={key} {...item} />)
            }
          </SeriesCollectionDirective>
        </ChartComponent>
    </div>
  )
}

export default Area