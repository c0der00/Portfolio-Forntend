import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './SemiDonutChart.css'; // Only used for the ::after styling

const SemiDonutChart = ({ percentage, fill, txt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`semi-donut ${isVisible ? 'visible' : ''} text-white text-lg font-semibold relative w-[300px] h-[150px] overflow-hidden flex items-end justify-center m-6`}
      style={{ '--percentage': percentage, '--fill': fill }}
    >
      {txt}
    </div>
  );
};

export default SemiDonutChart;
