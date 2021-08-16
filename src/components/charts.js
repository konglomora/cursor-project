import React from 'react';
//npm install --save react-chartjs-2 chart.js
import {Line} from 'react-chartjs-2';

//static test charts
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Income',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(253,178,1,1)',
      borderColor: 'rgba(253,178,1,1)',
      borderWidth: 2,
      data: [650, 59, 180, 81, 300]
    },
    {
        label: 'Expenses',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(132,125,115,1)',
        borderColor: 'rgba(132,125,115,1)',
        borderWidth: 2,
        data: [65, 100, 80, 95, 56]
      }
  ]
}

const Chart = () => {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Money flow',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
}

export default Chart;
