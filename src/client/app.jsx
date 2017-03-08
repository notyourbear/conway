import React from 'react';
import HelloButton from './containers/helloButton';
import Message from './containers/message';
import { APP_NAME } from '../shared/config';

const App = () => {
  return (
    <div>
      <h1>{APP_NAME}</h1>
      <Message />
      <HelloButton />
    </div>
  );
};

export default App;
