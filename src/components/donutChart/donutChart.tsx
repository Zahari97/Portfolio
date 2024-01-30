
import React, { useEffect, useState } from 'react';
import DonutChart from 'react-donut-chart';
import styles from './donutChart.module.scss';


interface DonutProps {
  data: { label: string; value: number }[];
}

function DonutChartComponent({data}: DonutProps):JSX.Element {
  const [chartDimensions, setChartDimensions] = useState({ width: 300, height: 300 });
  const [showLegend, setShowLegend] = useState(true) 
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth < 600 ? 250 : 350;
      const newHeight = newWidth;
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

    <div className={styles.donutchart}>
      <DonutChart
        className={styles.DDDDD}
        height={chartDimensions.height}
        width={chartDimensions.width}
        data={data}
        legend={showLegend}
      />
    </div>
    
   );
  }

export default DonutChartComponent;