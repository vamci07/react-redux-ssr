import React from 'react';

function Home() {
  return (
    <div>
      <div>I'm Home component</div>
      <button onClick={() => console.log('Button clicked')}>Click me!</button>
    </div>
  );
}

export default {
  component: Home
};
