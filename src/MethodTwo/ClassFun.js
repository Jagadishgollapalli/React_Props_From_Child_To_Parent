import React from 'react';

import Counter from './Counter';

export default class MethodTwo extends React.Component {
  countRef = React.createRef(); // null
  inputRef = React.createRef();

  decrement = () => this.countRef.current.decrement();
  reset = () => this.countRef.current.reset();
  printRef = () => console.log(this.countRef);

  setDefaultValue = () => (this.inputRef.current.value = 'Jagadish');

  render() {
    console.log(JSON.stringify(this.inputRef));
    return (
      <div>
        <h1>Hello Guvi!</h1>
        <button onClick={() => this.countRef.current.increment()}>
          Increment from MethodTwo
        </button>
        <button onClick={this.decrement}>Decrement from MethodTwo</button>
        <button onClick={this.reset}>Reset from MethodTwo</button>
        <button onClick={this.printRef}>Print Ref</button>
        <br /> <br />
        <input ref={this.inputRef} />
        <button onClick={this.setDefaultValue}>Set Default Value</button>
        <Counter ref={this.countRef} />
      </div>
    );
  }
}
