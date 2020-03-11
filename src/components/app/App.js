import React from 'react';
import './App.css';
import {Num} from '../num/num'
import {Result} from '../result/result'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result: '0',
      evaluated: true
    }
  }

  evaluate = () =>{
    try{
      return eval(this.state.result)
    }
    catch (e){
      return 'ERROR'
    }
  }
  getClicked = (num) => {
    if(this.state.evaluated) {this.setState({result: num , evaluated: false})}
    else{this.setState({result: this.state.result.concat(num)})}

    if(num === '='){
      this.setState({result: this.evaluate().toString()})
    }

    if(num === 'C'){
      this.setState({result:'0', evaluated:true})
    }
    if(num === '^2'){
      if(this.state.result[this.state.result.length-1].match(/[0-9]/)){
        this.setState({result: (this.evaluate()**2).toString()})
      }
    }
  }
  render(){
    return (
      <div className="App container my-5 mx-auto w-25 shadow-lg" >
        <Result result={this.state.result}/>
        <Num onclick={this.getClicked}/>
      </div>
    );
  }
  
}

export default App;
