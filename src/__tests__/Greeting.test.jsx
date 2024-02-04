import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { fetchGreeting } from '../redux/slices/greeting/greetingSlice';
import Greeting from '../components/Greeting';

const mockStore = configureMockStore();

jest.mock('../redux/slices/greeting/greetingSlice', () => ({
  fetchGreeting: () => ({ type: 'greeting/fetchGreeting' }),
}));

test('dispatches fetchGreeting on mount', () => {
  const store = mockStore({ greeting: { message: '', status: 'idle', error: null } });
  store.dispatch = jest.fn();

  act(() => {
    render(
      <Provider store={store}>
        <Greeting />
      </Provider>,
    );
  });

  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(fetchGreeting());
});

test('does not render anything when status is idle', () => {
  const store = mockStore({ greeting: { message: '', status: 'idle', error: null } });

  const { container } = render(
    <Provider store={store}>
      <Greeting />
    </Provider>,
  );

  expect(container.firstChild).toBeNull();
});

test('matches snapshot', () => {
  const store = mockStore({ greeting: { message: 'Hello', status: 'succeeded', error: null } });

  const { asFragment } = render(
    <Provider store={store}>
      <Greeting />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
