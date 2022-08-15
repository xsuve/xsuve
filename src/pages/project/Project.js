import { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import config from '../../config';

import Slider from 'react-slick';

import Navbar from '../../components/navbar/Navbar';
import WorkWithUs from '../../components/work-with-us/WorkWithUs';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

class Project extends Component {
  slider = undefined;
  sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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

  constructor(props) {
    super(props);
    this.state = {
      project: undefined
    };
  }

  componentDidMount() {
    if (this.props.params?.slug) {
      window.scrollTo(0, 0);

      fetch(config.api + '/projects.json').then(response => response.json()).then(data => {
        const _project = data.find(p => p.slug == this.props.params.slug);
        if (_project) {
          this.setState({
            project: _project
          });
        } else {
          this.props.navigate('/');
        }
      }).catch(error => {
        this.props.navigate('/');
      });
    } else {
      this.props.navigate('/');
    }
  }

  prev() {
    this.slider?.slickPrev();
  }

  next() {
    this.slider?.slickNext();
  }

  render() {
    return (
      <>
        <Navbar projectPage={true} />

        <div className='2xl:pt-32 xl:pt-32 pt-24 2xl:px-8 xl:px-8 px-6 project'>
          <div className='bg-neutral-50 overflow-hidden 2xl:rounded-3xl xl:rounded-3xl rounded-2xl 2xl:p-16 xl:p-12 p-6'>
            {
              this.state.project && 
                <img src={`${config.api + '/projects/' + this.state.project?.images[this.state.project?.displayImage]}`} alt={`xsuve - ${this.state.project?.description}`} className='max-w-full 2xl:rounded-3xl xl:rounded-3xl rounded-2xl' />
            }
          </div>
          <div className='2xl:px-44 xl:px-32 px-6 2xl:py-32 xl:py-16 py-8 text-center'>
            <h1 className='font-prompt text-black 2xl:text-5xl xl:text-4xl text-4xl font-medium !leading-tight'>{this.state.project?.title}</h1>
            <h2 className='font-poppins text-black 2xl:text-3xl xl:text-2xl text-xl font-light !leading-relaxed mt-8 mb-16'>{this.state.project?.description}</h2>
            <p className='font-poppins text-neutral-400 2xl:text-lg xl:text-base text-base font-light'>{this.state.project?.text}</p>
          </div>
          <div className='2xl:px-44 xl:px-32 px-0 2xl:py-32 xl:py-16 py-8'>
            <div className='flex justify-between items-center 2xl:gap-16 xl:gap-16 gap-6'>
              <div className='2xl:block xl:block hidden'>
                <button className='2xl:w-10 xl:w-8 w-8 2xl:h-10 xl:h-8 h-8 rounded-full bg-neutral-100 text-neutral-500 flex items-center justify-center cursor-pointer 2xl:text-base xl:text-sm text-sm' onClick={this.prev}>&larr;</button>
              </div>
              <div className='overflow-hidden rounded-2xl w-full xsuve-shadow'>
                <Slider ref={slider => (this.slider = slider)} {...this.sliderSettings}>

                  { 
                    this.state.project ? 
                      this.state.project?.images.map((image, index) => (
                        <div key={index}>
                          <img src={`${config.api + '/projects/' + image}`} alt={`xsuve - ${this.state.project?.description}`} className='max-w-full' />
                        </div>
                      ))
                    : null
                  }

                </Slider>
              </div>
              <div className='2xl:block xl:block hidden'>
                <button className='2xl:w-10 xl:w-8 w-8 2xl:h-10 xl:h-8 h-8 rounded-full bg-neutral-100 text-neutral-500 flex items-center justify-center cursor-pointer 2xl:text-base xl:text-sm text-sm' onClick={this.next}>&rarr;</button>
              </div>
            </div>
          </div>
        </div>

        <WorkWithUs />

        <Contact />

        <Footer />
      </>
    );
  }
}

export default (props) => (<Project {...props} params={useParams()} navigate={useNavigate()} />);
