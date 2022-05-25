import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['HTML', 'CSS3', 'Js', 'React', 'Node js', 'MangoDb', 'Flutter', 'May'],
  datasets: [
    {
      label: 'Skills',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [100, 100, 100, 100,98,99, 81, 56]
    }
  ]
}

export default class Skills extends React.Component {
  render() {
    return (
      <div className='text-white'>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20,
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
}