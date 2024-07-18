import React from 'react';
import Counter from './Counter';

class MethodOne extends React.Component {
  getCount = (count) => {
    console.log(count);
  };
  render() {
    return (
      <div>
        <h1>Hello Method-1 !</h1>
        <Counter getCount={this.getCount} />
      </div>
    );
  }
}
export default MethodOne;
