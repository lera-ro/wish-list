import './App.css';
import { Wish } from './Wish';
import Bubbles from './bubbles.jpg';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={Bubbles} width='100px'/>
      </div>
      <div className='container'>
        <h1>Your wish list</h1>
      </div>
      <Wish />
    </div>
  );
}

export default App;
