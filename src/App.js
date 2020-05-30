import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import AllFeedback from './Components/AllFeedbacks'
import FormInput from './Components/FormInput'
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path='/' component={FormInput} />
          <Route exact path='/feedbacks' component={AllFeedback} />
          />
        </Switch>
      </div>
    );
  }
}


export default App;
