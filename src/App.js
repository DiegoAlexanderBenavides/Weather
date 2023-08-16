import logo from './logo.svg';
import NavBar from './components/NavBar';
import './accests/css/App.css';

import WeatherPanel from './components/WeatherPanel'
function App() {
  return (
    <div className='App'>
      <NavBar/>

      <WeatherPanel/>
    </div>

  )
}

export default App;
