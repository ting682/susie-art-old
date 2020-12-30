import logo from './logo.svg';
import './App.css';

import React from 'react'
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';

function App() {
  return (
    <React.Fragment>
      <AmplifyAuthenticator>
        <div>
          My app
          <AmplifySignIn />
          <AmplifySignUp />
          <AmplifySignOut />
        </div>
      </AmplifyAuthenticator>
    </React.Fragment>
  );
}

export default App;
