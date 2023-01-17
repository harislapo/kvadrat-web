import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <h1>Kvadrat d.o.o.</h1>
        <p>Coming soon..</p>
        <p style={{ fontStyle: 'italic' }}>web@kvadratatelje.ba</p>
      </div>
    </div>
  );
}

export default App;
