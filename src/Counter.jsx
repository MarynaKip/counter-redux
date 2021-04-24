import { connect } from "react-redux";

const Counter = ({ step, value, onChangeStep, onIncrement, onDecrement }) => {
  return (
    <div>
      <h4>Counter</h4>

      <label>
        <span>step</span>
        <select value={step} onChange={onChangeStep}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </label>
      <div>
        <button onClick={onDecrement}>-</button>
        <p> {value}</p>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state,
  step: 1,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({ type: "counter/increment" }),
  onDecrement: () => dispatch({ type: "counter/decrement" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
