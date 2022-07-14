import React, { useState, useEffect } from 'react';
import ScatterNivo from './NivoChart/ScatterNivo';
import HeatNivo from './NivoChart/HeatNivo';

const Nivo = () => {
  const [scatData, setScatData] = useState(true);
  const [heatData, setHeatData] = useState(true);
  const [scatClick, setScatClick] = useState(false)
  const [heatClick, setHeatClick] = useState(false)

  useEffect(() => {
    if (scatData) setScatData(false);
    else return;
  }, [scatData]);

  useEffect(() => {
    if (heatData) setHeatData(false);
    else return;
  }, [heatData]);


  return (
    <div className='wrap'>
      <h2>ScatterPlot Chart</h2>
      <ScatterNivo scatData={scatData} />
      <button onClick={() => setScatClick(true)}>Scatter Plot Change</button>
      <hr />
      <h2>HeatMap Chart</h2>
      <HeatNivo heatClick={heatClick} />
      <button onClick={() => setHeatClick(!heatClick)}>HeatMap Change</button>
      <hr />
    </div>
  );
};

export default Nivo;
