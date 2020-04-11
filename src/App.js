import React from 'react';
import QuoteCard from './components/QuoteCard'
import axios from 'axios';
import './App.css';

const sampleSimpson ={
  quote: "I live in a single room above a bowling alley...and below another bowling alley.",
  character: "Frank Grimes",
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887',
}



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={ simpson:sampleSimpson};
    this.getSimpson = this.getSimpson.bind(this);
  }
  getSimpson() {
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          simpson: data[0],
        });
    });
  }
  render() {
  return (
    <div >
      <QuoteCard simpson={this.state.simpson}/>
     <button type="button" onClick={this.getSimpson}>Get Simpsons quote</button>
    </div>
  );
  }
}

export default App;
