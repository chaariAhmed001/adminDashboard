import { ChartComponent, DateTime, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts'
import React, { useContext } from 'react'
import { appContext } from '../../context/appContext';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';

const LineChart = () => {
  const {curentMode} = useContext(appContext);
  return (
    <ChartComponent
    id='line-chart'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={curentMode === 'Dark' ? "#33373E" : "#fff"}
    >
      <Inject services={[LineSeries, DateTime,Tooltip,Legend]} />
      <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item,key)=><SeriesDirective key={key} {...item} />)
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart