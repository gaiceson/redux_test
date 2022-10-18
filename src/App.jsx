import { useDispatch, useSelector } from "react-redux";
import { plus, minus, setName } from "./store/countSlice";
import { useState } from "react";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const age = useSelector((state) => state.counter.age);
  const dispatch = useDispatch();
  const [newAge, setNewAge] = useState(age);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewAge(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setName(newAge));
  };

  return (
    <div>
      <h1>COUNTER</h1>
      <button onClick={() => dispatch(minus())}>-</button>
      Value: {count}
      <button onClick={() => dispatch(plus())}>+</button>
      <h1>AGE</h1>
      {age}
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          placeholder="Display Age"
          value={newAge}
          autoFocus
          className="formInput"
        />
        <input
          type="submit"
          value="Update Age"
          className="formBtn"
          style={{ marginTop: 10 }}
        />
      </form>
    </div>
  );
}
