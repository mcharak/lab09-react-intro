import logo from './logo.svg';
import './App.css';
import Header from './Header'; 

function App() {

  function receiveHeaderClick(todoText) {
    console.log("Now we are in the parent component!")
    console.log(todoText); 
    // MAKE AJAX CALL IN PARENT COMPONENT
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header
        randomnumber="15"
        text="hola"
        receiveHeaderClick={receiveHeaderClick}
        />
        
      </header>
    </div>
  );
}

export default App;
