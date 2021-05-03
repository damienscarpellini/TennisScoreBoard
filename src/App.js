import logo from './logo.svg';
import './App.css';
import Tennis from './Tennis'

function App() {
  return (
    <Tennis />
  );
}

export default App;

//player 1 and player 2

/**
 * scores - 0, 15, 30, 40
 *  “love”, “fifteen”, “thirty”, and “forty”
 * if player with 40 points wins point - they win the set
 *  if both players have 40 points, they are at deuce
 * if boths players have 40 points, the player that wins get advantage
 * if player wins point when other player is at advantage, it goes back to deuce
 */
