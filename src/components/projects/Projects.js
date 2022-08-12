import { Component } from 'react';
import { Link } from 'react-router-dom';

import config from '../../config';

import Slider from 'react-slick';

class Projects extends Component {
  slider = undefined;
  sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  prev = this.prev.bind(this);
  next = this.next.bind(this);

  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    fetch(config.api + '/projects.json').then(response => response.json()).then(data => {
      this.setState({
        projects: data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  prev() {
    this.slider?.slickPrev();
  }

  next() {
    this.slider?.slickNext();
  }

  render() {
    return (
      <div className={`2xl:px-44 xl:px-32 px-6 2xl:py-32 xl:py-16 py-8 projects ${this.state.projects.length > 0 ? '' : 'hidden'}`}>
        <div className='flex justify-between items-center 2xl:px-36 xl:px-24 px-0 2xl:mb-16 xl:mb-12 mb-6 2xl:gap-0 xl:gap-0 gap-6'>
          <div className=''>
            <h1 className='font-prompt text-black 2xl:text-6xl xl:text-4xl text-3xl font-medium 2xl:mb-4 xl:mb-3 mb-3 !leading-tight'>Solutions</h1>
            <p className='font-poppins text-neutral-400 2xl:text-base xl:text-sm text-sm font-light'>We found this solutions for the specific problems.</p>
          </div>
          <div className='flex 2xl:gap-8 xl:gap-8 gap-4'>
            <button className='2xl:w-10 xl:w-8 w-8 2xl:h-10 xl:h-8 h-8 rounded-full bg-neutral-100 text-neutral-500 flex items-center justify-center cursor-pointer 2xl:text-base xl:text-sm text-sm' onClick={this.prev}>&larr;</button>
            <button className='2xl:w-10 xl:w-8 w-8 2xl:h-10 xl:h-8 h-8 rounded-full bg-neutral-100 text-neutral-500 flex items-center justify-center cursor-pointer 2xl:text-base xl:text-sm text-sm' onClick={this.next}>&rarr;</button>
          </div>
        </div>

        <div className='overflow-hidden 2xl:p-2 xl:p-2 2xl:-mx-0 xl:-mx-0 -mx-3'>
          <Slider ref={slider => (this.slider = slider)} {...this.sliderSettings}>

            {
              this.state.projects.map(project => (
                <div key={project.id}>
                  <Link to={`/project/${project.slug}`}>
                    <div className={`2xl:rounded-3xl xl:rounded-3xl rounded-2xl overflow-hidden relative cursor-pointer hover:transform hover:scale-[1.02] transition-transform ease-in duration-150`} style={{ backgroundColor: project.color }}>
                      <div className='2xl:p-24 xl:p-16 p-8 flex justify-between items-center'>
                        <h1 className='font-prompt text-black 2xl:text-4xl xl:text-2xl text-lg font-medium'>{project.title}</h1>
                        <p className='font-poppins text-neutral-500 2xl:text-base xl:text-sm text-xs font-light !leading-relaxed'>{project.series} • {project.status}</p>
                      </div>
                      <img src={`${config.api + '/projects/' + project.images[project.displayImage]}`} alt='' className='2xl:rounded-tl-3xl xl:rounded-tl-3xl rounded-tl-2xl 2xl:ml-16 xl:ml-16 ml-8' />
                    </div>
                    </Link>
                </div>
              ))
            }

          </Slider>
        </div>
      </div>
    );
  }
}

export default Projects;