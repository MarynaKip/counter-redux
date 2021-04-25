import { connect } from "react-redux";
// import {
//   onIncrement,
//   onDecrement,
//   onChangeStep,
// } from "./redux/counter/actions";
import * as actions from "./redux/counter/actions";

const Counter = ({ step, value, onChangeStep, onIncrement, onDecrement }) => {
  const handleChangeStep = (e) => onChangeStep(Number(e.target.value));
  const handleIncrement = () => onIncrement(step);
  const handleDecrement = () => onDecrement(step);

  return (
    <div>
      <h4>Counter</h4>

      <label>
        <span>step</span>
        <select value={step} onChange={handleChangeStep}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </label>
      <div>
        <button onClick={handleDecrement}>-</button>
        <p> {value}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ counter: { value, step } }) => ({
  value,
  step,
});

// const mapDispatchToProps = {
//   onIncrement,
//   onDecrement,
//   onChangeStep,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);
