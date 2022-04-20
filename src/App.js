import Mensaje from './Mensaje';
import './App.css';



function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un curso de React'/>
    </div>
  );
}

export default App;
