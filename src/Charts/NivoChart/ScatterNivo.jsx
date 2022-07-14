import React, { useState, useEffect } from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const ScatterNivo = ({ scatData }) => {
  const [data, setData] = useState([]);
  const nameArr = ['A', 'B', 'C', 'D', 'E', 'F'];

  // DataSet
  const dataSettingFn = () => {
    const dataArr = [];
    const xArr = [];
    const yArr = [];
    for (let i = 0; i < 50; i++) {
      // 임의로 데이터 만들어 주기(테스트)
      let x = Math.floor(Math.random() * 100);
      let y = Math.floor(Math.random() * 100);
      // 데이터에서 x, y값 뽑아와서 넣어줘야 함
      xArr.push(x);
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
      for (let i = 0; i < nameArr.length; i++) {
        let obj = { id: '', data: '' };
        obj.id = nameArr[i];
        obj.data = dataSettingFn();
        clone.push(obj);
      }
      return clone;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (!scatData) return;
    })
    if (data.length)
      setData(prev => {
        const clone = [...prev];
        clone.splice(0);
        return clone;
      });
    objSettingFn();
  }, [scatData]);

  return (
    <div style={{ width: '800px', height: '600px' }}>
      <ResponsiveScatterPlot
        data={data}
        margin={{ top: 20, right: 100, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        colors={{ scheme: 'nivo' }}
        blendMode='multiply'
        nodeSize={11}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'weight',
          legendPosition: 'middle',
          legendOffset: 46,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'size',
          legendPosition: 'middle',
          legendOffset: -60,
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 130,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 12,
            itemsSpacing: 5,
            itemDirection: 'left-to-right',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default ScatterNivo;
