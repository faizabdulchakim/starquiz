import React from 'react';
import {Container,Button,Paper} from '@material-ui/core/';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const styles = theme => ({
    paper: {
        height: 140,
        width: '100%',
        background:'white'
    },
    red_:{
        background:'red'
    }
});

class Landing extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
            quiz_title:'Star Quiz',
            number_question:10,
            max_score:100
		};
  }

  componentDidMount(){
		
  }

  myalert(){
      alert("halo");
  }

  render() {
    const { classes } = this.props;
		return(
            <Container>
                <Paper className={classes.paper}>
                    {this.state.quiz_title}<br/>
                    Jumlah Soal:{this.state.number_question}<br/>
                    Scor Maksimum:{this.state.max_score}<br/>
                    <Button onClick={()=>this.myalert()}>Mulai</Button>
                    <Link to="/quiz">Mulai</Link>
                </Paper>
            </Container>
        )
  }

}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
