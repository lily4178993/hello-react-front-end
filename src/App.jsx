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
      <h1 className="h-36 w-4/5 font-black">
        <Greeting />
      </h1>
      <button type="button" onClick={refreshGreeting} className="mt-8">Refresh</button>
    </div>
  );
}

export default App;
