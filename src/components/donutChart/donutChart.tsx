
import React, { useEffect, useState } from 'react';
import DonutChart from 'react-donut-chart';
import styles from './donutChart.module.scss';


interface DonutProps {
  data: { label: string; value: number }[];
}

function DonutChartComponent({data}: DonutProps):JSX.Element {
  const [chartDimensions, setChartDimensions] = useState({ width: 210, height: 140 });
  const [showLegend, setShowLegend] = useState(true) 
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth < 600 ? 150 : 450;
      const newHeight = window.innerWidth < 600 ? 150 : 300;
      setChartDimensions({ width: newWidth, height: newHeight });
      const legend = window.innerWidth < 600 ? false : true;
      setShowLegend(legend)
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <div className={styles.donutChartContainer}>
      <DonutChart
        // className={styles.donutchart}
        height={chartDimensions.height}
        width={chartDimensions.width}
        data={data}
        legend={showLegend}
      />
    </div>
    
   );
  }

export default DonutChartComponent;