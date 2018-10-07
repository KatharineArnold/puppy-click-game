import React, { Component } from 'react';
import './App.css';
import puppies from "./puppies.json";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";

class App extends Component {

  state = {
    puppies,
    correctGuesses: 0,
    bestScore: 0,
    gameOver: false,
    clickMessage: "Click on an image to earn points"
  };


  handlePuppyClick = id => {

    // Make a copy of the state matches array to work with
    const puppiesCopy = this.state.puppies.map(p => { return { ...p } });
    const clickedPuppy = puppiesCopy.find(puppy => puppy.id === id);

    let correctGuesses = this.state.correctGuesses;
    let gameOver = this.state.gameOver;
    let bestScore = this.state.bestScore;
    let clickMessage = this.state.clickMessage;


    if (clickedPuppy.clicked === false) {
      clickMessage = "Yay! You haven't click on that one yet! Keep Guessing!";
      clickedPuppy.clicked = true
      correctGuesses++

      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
      }

      if (correctGuesses >= 12) {
        gameOver = true;
        correctGuesses = 0;
        puppiesCopy.forEach(puppy => {
          puppy.clicked = false;
        });

        clickMessage = "YOU WON!"
      }

      //shuffle
      //loop through puppies and rerender with math random to shuffle
      //add correctGuesses ++  & if >bestscore then bestscore ++
      // Shuffle the array to be rendered in a random order
      puppiesCopy.sort(function (a, b) { return 0.5 - Math.random() });

    } else {
      console.log('Double Click' + JSON.stringify(clickedPuppy));
      //You already clicked that one!
      correctGuesses = 0;
      clickMessage = "You already clicked on that one! Now you have to start over!"
      gameOver = true;
      puppiesCopy.forEach(puppy => {
        puppy.clicked = false;
        // Shuffle the array to be rendered in a random order
        puppiesCopy.sort(function (a, b) { return 0.5 - Math.random() });
      });
    };
    this.setState({ puppies: puppiesCopy, correctGuesses, gameOver, bestScore, clickMessage });
  }

  renderHeader() {
    let heading = this.state.clickMessage;
    return heading;
  }

  render() {
    return (
      <Wrapper>
        <NavBar bestScore={this.state.bestScore} currentScore={this.state.correctGuesses}>
          {this.renderHeader()}
        </NavBar>
        <Jumbotron></Jumbotron>
        <div className="row">
          {this.state.puppies.map(puppy => (
            <ImageCard
              click={this.handlePuppyClick}
              id={puppy.id}
              image={puppy.image}
              name="Puppy"
              key={puppy.id}
            />
          ))}
        </div>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
