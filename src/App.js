import './App.css';
import Form from"./FormComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Good Evening kushal
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi this is production
        </a>
        <Form/>
      </header>
    </div>
  );
}

export default App;
