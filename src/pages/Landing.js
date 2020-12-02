import React from 'react';
import { Helmet } from 'react-helmet';
import {Container,Button,Typography,Box} from '@material-ui/core/';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BackgroundHeader from "../images/landing_bg.gif";

const styles = theme => ({
    paper: {
        height: "97%",
        width: '100%',
        marginTop:'1%',
        backgroundImage:'url('+ BackgroundHeader+')',
        backgroundSize: 'cover'
    },
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

  render() {
    const { classes } = this.props;
		return(
            
            <Container  style={{height:window.innerHeight,overflow:'hidden'}}>
                <Helmet>
                <title>Star Quiz</title>
                </Helmet>
                <Box className={classes.paper} >
                    <Box style={{textAlign:'center',paddingTop:50}}>
                      <Typography variant="h1" component="h2" gutterBottom>{this.state.quiz_title}</Typography>
                    </Box>
                    <Box style={{textAlign:'center'}}>
                      <Typography variant="h5" gutterBottom>
                      Jumlah Soal:{this.state.number_question}
                      </Typography>
                    </Box>
                    <Box style={{textAlign:'center'}}>
                      <Typography variant="h5" gutterBottom>
                      Scor Maksimum:{this.state.max_score}
                      </Typography>
                    </Box>
                    <Box style={{textAlign:'center'}}>
                      <Link to="/quiz" style={{textDecoration: 'none'}}>
                        <Button style={{backgroundColor:'purple',width:100,color:'white'}} >Start</Button>
                      </Link>
                    </Box>
                </Box>
            </Container>
        )
  }

}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
