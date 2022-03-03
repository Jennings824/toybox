import Nav from './components/Nav/Nav'
import Toybox from './components/Toybox/Toybox'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav className="App-header">
        Wow interesting
      </Nav>
      <div class="landing-center">
        <Toybox/>
        <Toybox/>
        <Toybox/>
      </div>
    </div>
  );
}

export default App;
