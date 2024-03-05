import './App.css';
import Navigation from './components/navigation/Navigation';
import Homepage from './components/home/Homepage';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
      <About />
    </div>
  );
}

export default App;
