import React from "react"
import ReactDOM from "react-dom"
import Confetti from 'react-dom-confetti'

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '250px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const ConfettiWrapper = props => (
  <div style={{ position: 'right'}} {...props} />
)

class CopyClipboard extends React.Component {
    constructor(props) {
      super(props);
      this.textContent = null;
      this.state = {
        copied: false
      };
    }

    remove() {
      var element = document.getElementById("i");
      element.remove();
    };
  
    copyToClipboard = async e => {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(this.textContent);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      this.setState({ copied: true });

    };

    initRef = c => (this.textContent = c);
  
    render() {
      const { copied } = this.state;
      return (
        <div>
          <a className="a">
              <div id="i" className="a" onClick={this.remove}><a onClick={this.copyToClipboard} ref={this.initRef} class="mt-4 underline hover:bg-gray-100 p1">me@lukasklinser.com</a></div>
              <ConfettiWrapper><Confetti active={copied} config={config} /></ConfettiWrapper>{copied && <p style={{marginBottom: "0rem"}}>Copied! 🎉</p> }
          </a>
        </div>
      );
    }
  }
  


  export default CopyClipboard;