import React, { useEffect } from 'react';
import './style.css';

import Counter from './Counter';

export default function AppFun() {
  const countRef = React.useRef(); // null
  const inputRef = React.useRef({ value: 'Guvi' });

  /*After the component has mounted once, we have the access for counter component and its methods inside countRef */
  /*useEffect(() => {
  console.log(countRef);
  }, []);*/

  const decrement = () => countRef.current.decrement();
  const reset = () => countRef.current.reset();
  const printRef = () => console.log(countRef);

  const setDefaultValue = () => (inputRef.current.value = 'Tamil');

  console.log(JSON.stringify(inputRef));
  return (
    <div>
      {console.log(printRef)}
      <h1>Hello Guvi!</h1>
      <button onClick={() => countRef.current.increment()}>
        Increment from App
      </button>
      <button onClick={decrement}>Decrement from App</button>
      <button onClick={reset}>Reset from App</button>
      <button onClick={printRef}>Print Ref</button>
      <br /> <br />
      <input ref={inputRef} />
      {/*also the other approach to see the Counter and its Counter component methods in the console.log()*/}
      <Counter
        ref={(ref) => {
          countRef.current = ref;
          console.log(countRef);
        }}
      />
    </div>
  );
}
