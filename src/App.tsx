import "./App.css";
import Counter from "./Counter";
import { useAppSelector } from "./hooks/storeHooks";

function App() {
  // const [count, setCount] = useState(0)
  const count = useAppSelector((state) => state.counter.value);

  return (
    <>
      Count: {count}
      <Counter />
    </>
  );
}

export default App;
