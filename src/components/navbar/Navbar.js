import { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectPage: this.props.projectPage ? true : false,
      loved: false
    };

    this.love = this.love.bind(this);
  }

  setCookie(name, value, expiration_days) {
    const d = new Date();
    d.setTime(d.getTime() + (expiration_days * 24 * 60 * 60 * 1000));
    const expires = 'expires='+ d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  getCookie(name) {
    const cookie_name = name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(cookie_name) == 0) {
        return c.substring(cookie_name.length, c.length);
      }
    }
    return '';
  }

  componentDidMount() {
    const loved = this.getCookie('xsuve_love');
    if (loved && loved == '<3') {
      this.setState({
        loved: true
      });
    }
  }

  love() {
    this.setState({
      loved: true
    });
    this.setCookie('xsuve_love', '<3', 7);
  }

  render() {
    return (
      <div className='flex justify-between items-center 2xl:px-80 xl:px-64 px-6 2xl:py-8 xl:py-8 py-6 w-full absolute top-0 left-0 bg-white z-50'>
        <Link to='/'>
          <div className='flex items-center'>
            {
              this.state.projectPage ? 
                <div className='font-poppins 2xl:text-3xl xl:text-3xl text-lg !leading-none 2xl:mr-4 xl:mr-4 mr-2 pb-[5px]'>&larr;</div>
              : null
            }
            <div className='2xl:w-28 xl:w-24 w-20'>
              <img src='/xsuve-logo.svg' alt='xsuve - Seeing solutions where others just see problems.' className='max-w-full' />
            </div>
          </div>
        </Link>
        <div className='font-poppins text-neutral-400 font-normal 2xl:text-sm xl:text-xs text-xs tracking-wider leading-none'>
          <a href='mailto:george@xsuve.com'>GEORGE@XSUVE.COM</a>
        </div>
        <div className='flex justify-end'>
          <button className={`2xl:w-10 xl:w-8 w-8 2xl:h-10 xl:h-8 h-8 rounded-full relative flex items-center justify-center cursor-pointer 2xl:text-base xl:text-base text-base ${this.state.loved ? 'bg-red-50 text-red-500' : 'bg-neutral-100 text-neutral-500'} hover:bg-red-50 hover:text-red-500 transition-colors ease-in duration-150`} onClick={this.love}>
            <span className={`${this.state.loved ? 'animate-love' : ''}`}>&hearts;</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;