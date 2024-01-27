import logo from './logo.svg';
import './App.css';

function App() {

  let mystyle ={
    backgroundColor:'white',
    color:'black'
  }
  return (
    <>
    
    <div className="App" >
      <header className="App-header" style={mystyle}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    document.body.style.backgroundColor ='white';
    </>
  );
}

export default App;
