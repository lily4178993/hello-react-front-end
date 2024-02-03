import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/slices/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, status, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  } if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  } if (status === 'succeeded') {
    return <h1>{message}</h1>;
  }
  return null;
};

export default Greeting;
