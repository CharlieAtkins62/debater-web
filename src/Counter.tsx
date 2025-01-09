import { useAppDispatch } from './hooks/storeHooks';
import { increment, decrement } from './slices/counterSlice';

export default function Counter() {
  const dispatch = useAppDispatch();

  function incrementCounter() {
    dispatch(increment());
  }

  function decrementCounter() {
    dispatch(decrement());
  }

  return (
    <>
      <button onClick={incrementCounter}>
        Increment +
      </button>
      <button onClick={decrementCounter}>
        Decrement -
      </button>
    </>
  );
}
