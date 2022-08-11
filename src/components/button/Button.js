import { Component } from 'react';

import './Button.css';

class Button extends Component {
  render() {
    return (
      <button className={`${this.props.color} font-poppins 2xl:text-sm xl:text-xs text-xs font-medium tracking-wider rounded-xl px-6 py-5 cursor-pointer ${this.props.className ? this.props.className : ''}`} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;