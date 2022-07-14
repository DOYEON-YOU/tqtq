import React, { useState, useEffect } from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';

const HeatNivo = ({ heatClick }) => {
  const [data, setData] = useState([]);
  const xArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const idArr = [
    'JS',
    'React',
    'Python',
    'Java',
    'Ruby',
    'C',
    'Kotlin',
    'Swift',
  ];

  const dataSettingFn = () => {
    const dataArr = [];
    const yArr = [];
    for (let i = 0; i < xArr.length; i++) {
      // 임의로 데이터 만들어 주기(테스트)
      let yPlus = Math.floor(Math.random() * 100000);
      let yMinus = Math.floor(Math.random() * -100000);
      let y = yPlus + yMinus;
      // 데이터에서 x, y값 뽑아와서 넣어줘야 함
      yArr.push(y);
      // 좌표 오브젝트 생성
      dataArr.push({ x: xArr[i], y: yArr[i] });
    }
    return dataArr;
  };

  // 데이터 state 수정
  const objSettingFn = () => {
    setData(prev => {
      const clone = [...prev];
      setTimeout(() => {
        for (let i = 0; i < idArr.length; i++) {
          let obj = { id: '', data: '' };
          obj.id = idArr[i];
          obj.data = dataSettingFn();
          clone.push(obj);
        }
      })
      return clone;
    });
  };

  useEffect(() => {
    console.log(heatClick);
    if (data.length)
      setData(prev => {
        const clone = [...prev];
        clone.splice(0);
        return clone;
      });
    setTimeout(() => {
      objSettingFn();
    });
    console.log(data);
  }, [heatClick]);

  return (
    <div style={{ width: '800px', height: '600px' }}>
      <ResponsiveHeatMap
        data={data}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: '',
          legendOffset: 46,
        }}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 70,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: -72,
        }}
        colors={{
          type: 'diverging',
          scheme: 'red_yellow_blue',
          divergeAt: 0.5,
          minValue: -100000,
          maxValue: 100000,
        }}
        emptyColor='#555555'
        legends={[
          {
            anchor: 'bottom',
            translateX: 0,
            translateY: 30,
            length: 400,
            thickness: 8,
            direction: 'row',
            tickPosition: 'after',
            tickSize: 3,
            tickSpacing: 4,
            tickOverlap: false,
            tickFormat: '>-.2s',
            title: 'Value →',
            titleAlign: 'start',
            titleOffset: 4,
          },
        ]}
      />
    </div>
  );
};

export default HeatNivo;
