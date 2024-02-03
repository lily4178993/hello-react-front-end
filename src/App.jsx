import { useDispatch } from 'react-redux';
import './App.css';
import Greeting from './components/Greeting';
import { fetchGreeting } from './redux/slices/greeting/greetingSlice';

function App() {
  const dispatch = useDispatch();

  const refreshGreeting = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div className="text-center text-red-800">
      <div className="h-36">
        <Greeting />
      </div>
      <button type="button" onClick={refreshGreeting} className="mt-8">Refresh</button>
    </div>
  );
}

export default App;
