import React from 'react';
import {Container,Box,Paper, Button,Typography,FormControlLabel,Checkbox,RadioGroup,Radio,TextField} from '@material-ui/core/';
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
        width: '100%'
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
    this.setState({questions:database[0]},function(){
      var buff_all_question  = this.state.questions;
      buff_all_question.list_question.map((q,l)=>{
        q.truefalse   = 'notyet';
        q.myanswer    = '';
        q.next_retry  = -100;
      });
      this.setState({
        current_number:0,
        submit_btn:"submit",
        score:0,
        selectedoption:100,
        buff_answer:"",
        questions:buff_all_question,
        left_question:this.state.questions.list_question.length
      },function(){
        this.setState({isloading:false})
      });
    })
  }

  submitAnswer(){
    var active_number          = this.state.current_number;
    var active_data            = this.state.questions.list_question[active_number];
    var active_selectedoption  = this.state.selectedoption;
    var active_answer          = this.state.buff_answer;
    var max_retry              = this.state.questions.max_retry;
    var score                  = this.state.score;
    var next_retry             = active_data.next_retry;
    var truefalse              = active_data.truefalse;
    var myanswer               = active_data.myanswer;
 
    //jika jawaban kosong maka alert
    if(active_answer==""&&active_data.type=="fill_in_the_blank"){
     //alert("Silahkan isi jawaban terlebih dahulu!");
     /*
     Alert.alert(
       "Peringatan",
       "Silahkan isi jawaban terlebih dahulu!",
       [
         { text: "OK", onPress: () => console.log("OK Pressed") }
       ],
       { cancelable: false }
     );
     */
       alert("Silahkan isi jawaban terlebih dahulu!");
     return false;
    }
    //jika pilihan kosong maka alert
    if(active_selectedoption==100&&active_data.type=="multiple_choice"){
     alert("Silahkan pilih jawaban terlebih dahulu!");
     /*
     Alert.alert(
       "Peringatan",
       "Silahkan isi jawaban terlebih dahulu!",
       [
         { text: "OK", onPress: () => console.log("OK Pressed") }
       ],
       { cancelable: false }
     );
     */
     return false;
    }
 
    // jika belum pernah dikerjakan maka "jumlah kesempatan" mengambil dari source utama
    if(next_retry==-100){
     next_retry = max_retry; 
    }
 
    // jika type soal adl pilihan ganda & jawaban benar & masih punya kesempatan menjawab
    if(active_data.type=="multiple_choice"&&next_retry>0){
      if(active_data.answer==active_selectedoption){
       truefalse = true;
       myanswer = active_selectedoption;
       score++;
      }
    }
 
    // jika type soal adl pilihan ganda & jawaban salah & masih punya kesempatan menjawab
    if(active_data.type=="multiple_choice"&&next_retry>0){
     if(active_data.answer!=active_selectedoption){
       truefalse = false;
       myanswer = active_selectedoption;
     }
   }
 
 
   // jika type soal adl isian & case sensitif == false
   if(active_data.case_sensitive==false){
     active_answer =active_answer.toUpperCase();
     active_data.answer = active_data.answer.toUpperCase();
   }
 
   // jika type soal adl isian & jawaban benar & masih punya kesempatan menjawab
   if(active_data.type=="fill_in_the_blank"&&next_retry>0){
     if(active_data.answer==active_answer){
       truefalse = true;
       myanswer = active_answer;
       score++;
     }
   }
 
   // jika type soal adl isian & jawaban salah & masih punya kesempatan menjawab
   if(active_data.type=="fill_in_the_blank"&&next_retry>0){
    if(active_data.answer!=active_answer){
     truefalse = false;
     myanswer = active_answer;
    }
  }
 
 
 
 // setelah menentukan benar / salah selanjutnya adl mengatur tombol & message
 // pertama, kesempatan menjawab dikurangi dulu
   var next_retry_ = next_retry-1;
 
 
 
   // menyimpan jawaban, benar / salah jawaban, jumlah kesempatan mengulang.
   var buff_all_question  = this.state.questions;
   buff_all_question.list_question.map((q,l)=>{
     if(l==active_number){
       q.truefalse   = truefalse;
       q.myanswer    = myanswer;
       q.next_retry  = next_retry_;
     }
   });
 
   this.setState({
     questions:buff_all_question,
     score:score
   },function(){
     //===========================
     var buffer_ = [];
     this.state.questions.list_question.map((s)=>{
       //blm dijawab / sudah dijawab tapi masih salah
       if(s.next_retry ==-100||(s.next_retry>0&&s.truefalse==false)){
         buffer_.push(s);
       }
     });
     this.setState({left_question:buffer_.length},function(){
       this.setbtnmsg(active_number,false);
     })
     //===========================
     
   })
 
  }

  setbtnmsg(i,closedrawer){
    var active_data     = this.state.questions.list_question[i];

    var next_btn = "";
    var msg = "";
    var set_selectedoption = this.state.selectedoption;
    var set_buffanswer = this.state.buff_answer;
    
    //set errormsg & submit btn
    //ksesempatan menjawab masih full & jawaban masih kosong
      //tombol next
      //msg kosong
      if(active_data.next_retry==-100&&active_data.myanswer==""&&active_data.truefalse=="notyet"){
        next_btn = "submit";
        msg = "";
      }
    //punya kesempatan menjawab & jawaban sebelumnya benar
      //tombol next
      //msg benar
      if(active_data.next_retry>0&&active_data.truefalse==true){
        next_btn = "next";
        msg = "✔️ benar";
      }
    //punya kesempatan menjawab & jawaban sebelumnya salah
      //tombol submit
      //msg masih punya kesempatan x kali
      if(active_data.next_retry>0&&active_data.truefalse==false){
        next_btn = "submit";
        msg = "❌ Salah!\r\nKamu punya kesempatan "+active_data.next_retry+ " kali lagi untuk menjawab";
        set_selectedoption = 100;
        set_buffanswer = "";
      }
    //ngga punya kesempatan & jawaban sebelumnya benar
      //tombol next
      //msg benar
      if(active_data.next_retry<1&&active_data.truefalse==true){
        next_btn = "next";
        msg = "️️✔️ benar";
      }
    //ngga punya kesempatan & jawaban sebelumnya salah
      //tombol next
      //msg salah
      if(active_data.next_retry<1&&active_data.truefalse==false){
        next_btn = "next";
        msg = "❌ Salah!";
      }
    //nomor soal terakir, jawaban benar. maka tombol submit diubah jadi tombol lihat hasil.
      if(this.state.left_question<1){
        next_btn = "result";
        msg = "Selesai";
      }
    
    
    
    this.setState({
      current_number:i,
      false_message:msg,
      submit_btn:next_btn,
      selectedoption:set_selectedoption,
      buff_answer:set_buffanswer
    },function(){
      this.countscore();
      /*
      if(closedrawer==true){
        this.closeDrawer();
      }
      */
    });
  }

  countscore(){
    var num_question = this.state.questions.list_question.length;
    var max_score = parseFloat(this.state.questions.max_score);
    //var min_score = parseFloat(this.state.questions.min_score);
    var cur_score = parseInt(this.state.score);

    var point = max_score / num_question;
    var real_score = point * cur_score;
    this.setState({real_score:real_score});
  }

  next(){
    var current_number = this.state.current_number;
    current_number = parseInt(current_number);
    current_number = current_number+1;
    if(current_number<this.state.questions.list_question.length){
        this.selectQuetion(current_number);
    }else if(current_number==this.state.questions.list_question.length&&this.state.left_question>0){
      var a_ = [];
      this.state.questions.list_question.map((b_)=>{
        if(b_.truefalse=="notyet" || (b_.next_retry>0&&b_.truefalse==false)){
          a_.push(b_)
        }
      })
      this.selectQuetion(a_[0].numbering);
    }
  }

  selectQuetion(i){
    var active_data     = this.state.questions.list_question[i];
    var question_type   = active_data.type;
    var latest_answer   = active_data.myanswer;

    var set_selectedoption = 100;
    var set_buffanswer = "";

    //set selected
    if(question_type=="multiple_choice"&&latest_answer!=""){
      set_selectedoption = latest_answer;
    }
    
    //set buff answer
    if(question_type=="fill_in_the_blank"&&latest_answer!=""){
      set_buffanswer = latest_answer;
    }

    this.setState({
      current_number:i,
      selectedoption:set_selectedoption,
      buff_answer:set_buffanswer
    },function(){
        this.setbtnmsg(i,true);
    });
  }

  showresult(){
    alert("show result")
  }

  backtohome(){
    alert("back to home");
  }

  showresult(){
    var num_question        = this.state.questions.list_question.length;
    var max_score           = parseFloat(this.state.questions.max_score);
    var min_score           = parseFloat(this.state.questions.min_score);
    var cur_score           = parseInt(this.state.score);
    var rs_statement_color  = "";

    var point         = max_score / num_question;
    var real_score    = point * cur_score;
    var rs_statement  = "";

    if(real_score>=min_score){
      rs_statement        = "Selamat, Kamu lulus test";
      rs_statement_color  = "green";
    }else{
      rs_statement        = "Maaf, Nilai kamu kurang dari "+min_score+"\r\nsilahkan ulangi test!";
      rs_statement_color  = "red";
    }

    this.setState({
      "real_score":real_score,
      "rs_statement":rs_statement,
      "submit_btn":"back",
      "rs_statement_color":rs_statement_color
    });

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
                  this.state.questions.list_question.map((x,index_)=>{
                      return(
                          
                          parseInt(x.numbering)==parseInt(this.state.current_number) ?                
                          <Box >
                              {/*question*/}
                              <Paper>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {index_+1}. {x.question} 
                                </Typography>
                              </Paper>

                              {
                                /*questions image*/
                                x.question_image!==undefined?
                                <img src={x.question_image}  />
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
                                    
                                    <Box>
                                      <RadioGroup aria-label="gender" name="gender1" value={"male"}  >
                                      {
                                        z.includes("data:image/")?
                                        <FormControlLabel
                                        onChange={() => {
                                          x.truefalse=="notyet"||(x.truefalse==false&&x.next_retry>0)?
                                          this.setState({"selectedoption":index})
                                          :
                                          this.setState({"selectedoption":this.state.selectedoption})
                                        }} 
                                        control={<Checkbox checked={this.state.selectedoption==index ? true : false}  />}
                                        label={<img src={z}  />}
                                        />
                                        :
                                        <FormControlLabel
                                        onChange={() => {
                                          x.truefalse=="notyet"||(x.truefalse==false&&x.next_retry>0)?
                                          this.setState({"selectedoption":index})
                                          :
                                          this.setState({"selectedoption":this.state.selectedoption})
                                        }} 
                                        control={<Checkbox checked={this.state.selectedoption==index ? true : false}  />}
                                        label={z}
                                        />
                                      }
                                      

                                      </RadioGroup>



                                      
                                    </Box>
                                  )
                                })
                                :
                                null
                              }

                              {
                                /*Box input for  fill_in_the_blank question*/
                                x.type=="fill_in_the_blank"?
                                <TextField id="outlined-basic"  variant="outlined" value={this.state.buff_answer}
                                onChange={(e) => {
                                  x.truefalse=="notyet"||(x.truefalse==false&&x.next_retry>0)?
                                  this.setState({"buff_answer":e.target.value})
                                  :
                                  this.setState({"buff_answer":this.state.buff_answer})
                                }}
                                />
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


                {
                  this.state.false_message!=""&&this.state.rs_statement==""&&this.state.review_answer==false?
                  <Typography >{this.state.false_message}</Typography>
                  :
                  null
                }

                {
                  /*test result area (panel)*/
                  this.state.rs_statement!=""?
                    
                    <Box>
                      <Typography>{this.state.rs_statement}</Typography>
                      <Typography>Nilai Kamu: {this.state.real_score}</Typography>
                    </Box>
                  :
                  null
                }

                {
                  /*tombol submit, muncul ketika masih punya kesempatan menjawab*/
                  this.state.submit_btn=="submit"&&this.state.review_answer==false?
                  <Button   onClick={()=>this.submitAnswer()} >
                    Submit
                  </Button>
                  :
                  null
                }

                {
                  /*next button, muncul ketika kesempatan menjawab habis atau jawaban benar*/
                  this.state.submit_btn=="next"||this.state.review_answer==true?
                  <Button  onClick={()=>this.next()} >
                    Lanjut
                  </Button>
                  :
                  null
                }

                {
                  /*show result button*/
                  this.state.submit_btn=="result"&&this.state.review_answer==false?
                    <Box>
                      
                      <Button   onClick={()=>this.showresult()} >
                        Lihat Hasil
                      </Button>
                    </Box>
                  :
                    null
                }

                {
                  this.state.submit_btn=="back"||this.state.review_answer==true?  
                    <Button   onClick={()=>this.backtohome()} >
                    HOME
                    </Button >
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
