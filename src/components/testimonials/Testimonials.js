import { Component } from 'react';

import config from '../../config';

import QuotesSVG from './QuotesSVG';

class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      testimonials: [],
      testimonial: undefined
    };
  }

  componentDidMount() {
    fetch(config.api + '/testimonials.json').then(response => response.json()).then(data => {
      const random = Math.floor(Math.random() * (data.length - 0 + 1) + 0);

      this.setState({
        testimonials: data,
        testimonial: data[random]
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className={`2xl:px-80 xl:px-64 px-6 2xl:py-32 xl:py-16 py-8 flex justify-center ${this.state.testimonials.length > 0 && this.state.testimonial ? '' : 'hidden'}`}>
        <div className='text-center'>
          <QuotesSVG />
          <div className='2xl:px-80 xl:px-40 px-8'>
            <h2 className='font-poppins text-black 2xl:text-2xl xl:text-xl text-lg font-light !leading-relaxed'>{this.state.testimonial?.text}</h2>
          </div>
          <h6 className='font-prompt text-black 2xl:text-lg xl:text-base text-sm font-normal 2xl:mt-16 xl:mt-12 mt-8'>{this.state.testimonial?.author}</h6>
          <p className='font-poppins text-neutral-400 2xl:text-sm xl:text-sm text-xs font-light mt-1'>{this.state.testimonial?.position} at {this.state.testimonial?.company}</p>
        </div>
      </div>
    );
  }
}

export default Testimonials;