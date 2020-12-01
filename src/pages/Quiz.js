import React from 'react';
import {Container,Box,Paper, Button,Typography} from '@material-ui/core/';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {quiz_bank} from "../questions/Quiz_bank";

const styles = theme => ({
    paper: {
        height: 140,
        width: '100%',
    },
    title: {
        fontSize: 14,
        textAlign:'center'
    },
});

class Quiz extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
            rs_statement:'',
            questions:[],
            isloading:true,
            current_number:0,
            selectedoption:100,
            buff_answer:"",
            submit_btn:"submit",
            score:0,
            false_message:'',

            real_score:0,
            rs_statement:'',
            left_question:0,
            
            rs_statement_color:'black',
            review_answer:false
		};
  }

  componentDidMount(){
    this.setState({questions:database},function(){
        this.setState({isloading:false})
      })
  }

  render() {
      if(this.state.isloading==true){
        return(
            <Box>Loading</Box>
        )
      }
    const { classes } = this.props;
		return(
            <Container>
                <Paper className={classes.paper}>
                {
                  this.state.rs_statement==""?
                  this.state.questions[0].list_question.map((x,index_)=>{
                      return(
                          
                          parseInt(x.numbering)==parseInt(this.state.current_number) ?                
                          <Box >
                              {/*question*/}
                              <Typography className={classes.title} color="textSecondary" gutterBottom>
                              {index_+1}. {x.question} 
                              </Typography>
                              {
                                /*questions image*/
                                x.question_image!==undefined?
                                <Box>{x.question_image}</Box>
                                :
                                null
                              }

                              {/*space*/}
                              <Box style={{marginTop:10}}>
                              </Box>
                              
                              {
                                /*multiple choice options*/
                                x.type=="multiple_choice"?
                                x.options.map((z,index)=>{
                                  return (
                                    <Box style={{flexDirection:'row'}}>
                                      <Button>#</Button>
                                        {
                                          typeof z=="string"?
                                          
                                            <Box >{z}</Box>
                                          :
                                            <Box>{z}</Box>
                                          
                                        }
                                        
                                    </Box>
                                  )
                                })
                                :
                                null
                              }

                              {
                                /*Box input for  fill_in_the_blank question*/
                                x.type=="fill_in_the_blank"?
                                <Box>{this.state.buff_answer}</Box>
                                :
                                null
                              }

                            {
                              /*space*/
                            }
                            <Box style={{marginTop:10}}>
                            </Box>
                            {
                              this.state.review_answer==true?
                              <Box>
                              <Box >{x.truefalse==true?'Benar':'Salah'}</Box>
                              </Box>
                              :
                              null
                            }

                        </Box>
                        :
                        null
                       
                      )
                  })
                  :
                  null
                }
                </Paper>
            </Container>
        )
  }

}

Quiz.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quiz);



//==========================================================
//==========================================================
const database = [
    {
    "max_retry":1,
    "max_score":100,
    "min_score":0,
    "number_of_question":5,
    "list_question":[]
    }
  ]
  
  function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
  
  var buffarr = []; // for sub tema 1
  function collageQuetion(){
    var randomNumber = getRandomArbitrary(0,10);
    if(buffarr.includes(randomNumber)){
      collageQuetion();
    }else{
      buffarr.push(randomNumber);
    }
  }
  
  // random number question sub tema 1
  for(var x=0;x<database[0].number_of_question;x++){
    collageQuetion();
  }
  
  // selected question sub tema 1
  var select_questions = [];
  for(var y=0;y<buffarr.length;y++){
      select_questions.push(quiz_bank[buffarr[y]]);
  }
  //replace question number
  for(var z=0;z<select_questions.length;z++){
    select_questions[z].numbering = z;
  }
  database[0].list_question = select_questions;
