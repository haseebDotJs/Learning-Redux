import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'

import CakeContainer from './components/CakeContainer/CakeContainer';
import HooksCakeContainer from './components/CakeContainer/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer/IceCreamContainer';
import SandwichContainer from './components/SandwichContainer/SandwichContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <SandwichContainer />
      </div>
    </Provider>
  );
}

export default App;
