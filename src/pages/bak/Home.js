import React from 'react';
import {Box,Container,Button,Grid,Paper} from '@material-ui/core';
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
  Container_:{
      background:'red',
  },
  Grid_:{
      backround:'green'
  },
  paper: {
    height: 140,
    width: 100,
    background:'green'
  },
});

class Home extends React.Component {
  
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
        <Grid container justify="center" spacing={1}>
            {[0, 1, 2,3,4,5,6,7,8,9,10,11].map((value) => (
            <Grid key={value} item>
                <Paper className={classes.paper} />
            </Grid>
            ))}
        </Grid>
    )
  }

}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
