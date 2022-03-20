import logo from './logo.svg';
import './App.css';
import PersonCard from './Componentes/PersonCard';
import PersonCard2 from './Componentes/PersonCard2';

function App() {
  return (
    <div className="App">
      <div>
        <PersonCard firstName={"Jane,"}/>
        <PersonCard lastName={"Doe"}/>
        <PersonCard age={45}/>
        <PersonCard hairColor={"Black"}/>
      </div>

      <div>
        <PersonCard2 firstName={"John,"}/>
        <PersonCard2 lastName={"Smith"}/>
        <PersonCard2 age={88}/>
        <PersonCard2 hairColor={"Brown"}/>
      </div>
    </div>
      


  );
}

export default App;
