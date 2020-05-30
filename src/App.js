import React from 'react';
import { Switch, Route  } from 'react-router-dom';

import FormInput from './Components/FormInput'
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path='/' component={FormInput} />
          {/* <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } */}
          />
        </Switch>
      </div>
    );
  }
}


export default App;
