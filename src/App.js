import './App.css';
import Navigation from './components/navigation/Navigation';
import Homepage from './components/home/Homepage';
import About from './components/about/About';
import Message from './components/messages/Messages';
import Notifications from './components/notifications/Notifications';
import Favourites from './components/favourites/Favourite';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
      <Message/>
      <Notifications/>
      <Favourites/>
      <About />
    </div>
  );
}

export default App;
