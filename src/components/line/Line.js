import { Component } from 'react';

class Line extends Component {
  componentDidMount() {
    const speed = 1;
    const line = document.querySelector('.line-path');
    const length = line.getTotalLength();
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;

    window.addEventListener('scroll', () => {
      const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      const draw = length * scrollPercent * speed;
      line.style.strokeDashoffset = length - draw;
    });
  }

  render() {
    return (
      <svg className='line' viewBox='0 0 1920 1080' preserveAspectRatio='xMidYMax meet'>
        <path
          className='line-path'
          fill='none'
          stroke='black'
          strokeWidth='4'
          d='M1535.1,0c-55.6,64.4-166.4,175.8-341.8,253.8c-133,59.2-242.8,68.4-411.9,84.1c-100.2,9.3-270.4,25.1-279-8.9
          c-6.3-24.9,73.7-77.9,156.5-85.6c118.1-11,236.8,70.6,228.8,106.3c-9,40.1-186,58-308.5-19.2c-28.3-17.8-68.8-43.4-65-69.4
          c8.1-54.6,211.7-109.5,349.9-26.6c0,0,68.2,41,107.8,119.6c132.9,264.3-221.2,704-239.1,725.8'
        />
      </svg>
    );
  }
}

export default Line;