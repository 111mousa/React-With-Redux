import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      {/* <ItemContainer cake />
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <HooksIceCreamContainer/>
      <NewCakeContainer/> */}
      <UserContainer/>
    </div>
  );
}

export default App;