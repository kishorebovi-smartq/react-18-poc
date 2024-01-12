import './App.scss';
import Login from './components/login';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
