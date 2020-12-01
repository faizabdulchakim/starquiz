import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'red',
    height: 48,
    padding: '0 30px',
  },
});

class About extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
			mydata:'halo'
		};
  }

  componentDidMount(){
		this.setState({mydata:'salam'})
  }

  render() {
    const { classes } = this.props;
		return(
          <Box>
            <Button>About</Button>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
          </Box>
        )
  }

}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
