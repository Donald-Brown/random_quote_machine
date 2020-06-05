import React, { Component } from "react";
import { random } from "lodash";
import 'typeface-roboto';
import QuoteMaker from './components/QuoteMaker';
import  Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  // fetch qoute data from gist found on github using componentDidMount
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      //returns a promise then parse the json
      .then((data) => data.json())
      // can console log to test ex. result => console.log(result);
      // then set state with the result
      .then((quotes) =>
        this.setState({ quotes }, this.assignNewQuoteIndex)); // quotes in {} is the same as quotes: quotes
  }

  get selectedQuote() {
        if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return undefined;
    }else{
      return this.state.quotes[this.state.selectedQuoteIndex];
    }
  }

  //generate a random quote index
  // using random from the lodash library to get random index
  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    } else {
      return random(0, this.state.quotes.length - 1);
    }
  }

  assignNewQuoteIndex(){
    this.setState({ selectedQuoteIndex: this.selectQuoteIndex() });
  }    

  render() {
    // for testing
    //console.log(this.state.quotes);
    //console.log(this.state.selectedQuoteIndex);
    
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify='center' container>
        <Grid xs={11} lg={8} item>
          {
            this.selectedQuote ? 
            <QuoteMaker selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} /> :
            null
          } 
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
