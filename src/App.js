import './App.css';
// import Sidebar from './components/Sidebar.js';
import Accordion from './components/accordion_project/Accordion';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMoreData from './components/load-more-data/LoadMoreData';
import RandomColor from './components/random-color-project/RandomColor';
import StarRating from './components/star-rating/StarRating';
import TicTacToe from './components/tic-tac-toe/TicTacToe';

function App() {
  return (
    <div className="App">
      {/* <h1>My React App</h1> */}
      {/* <Sidebar /> */}

      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider 
        url={'https://picsum.photos/v2/list'} 
        limit={'10'} 
        page={'1'} 
      /> */}

      {/* <LoadMoreData /> */}

      <TicTacToe />

    </div>
  );
}

export default App;
