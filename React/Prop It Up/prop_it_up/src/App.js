import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      
     
      <PersonCard firstName={"ahmad"} lastName={"zyoud"} age={20} hairColor={"red"}/>
      <PersonCard firstName={"abd"} lastName={"jarrar"} age={30} hairColor={"black"}/>
      <PersonCard firstName={"samer"} lastName={"abo ghos"} age={25} hairColor={"brawn"}/>
    </div>
  );
}

export default App;
