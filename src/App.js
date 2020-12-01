import React from 'react';
import Box from '@material-ui/core/Box';

import Landing  from './pages/Landing.js';
import Quiz     from './pages/Quiz.js';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  
	constructor(props) {
		super(props);
  }

  render() {
    const { classes } = this.props;
		return(
      <Box>
        <Router>

          <Switch>
            <Route path="/quiz" component={Quiz}>
            </Route>

            <Route path="/"  component={Landing} >
            </Route>
          </Switch>

        </Router>
      </Box>
    )
  }

}

export default App;
