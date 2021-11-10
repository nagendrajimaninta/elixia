import React from 'react';
import './App.css';
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={
      date:new Date()
    };
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({date:new Date()});
  }
  render(){
    return (
      <>
   <h1>{this.state.date.toLocaleString()}</h1>
      </>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

export default App;
