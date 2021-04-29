// import { connect } from "react-redux";
// import * as actions from "./redux/counter/actions";

// const Counter = ({ step, value, onChangeStep, onIncrement, onDecrement }) => {
//   const handleChangeStep = (e) => onChangeStep(Number(e.target.value));
//   const handleIncrement = () => onIncrement(step);
//   const handleDecrement = () => onDecrement(step);

//   return (
//     <div>
//       <h4>Counter</h4>

//       <label>
//         <span>step</span>
//         <select value={step} onChange={handleChangeStep}>
//           <option value="1">1</option>
//           <option value="5">5</option>
//           <option value="10">10</option>
//           <option value="25">25</option>
//           <option value="50">50</option>
//         </select>
//       </label>
//       <div>
//         <button onClick={handleDecrement}>-</button>
//         <p> {value}</p>
//         <button onClick={handleIncrement}>+</button>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = ({ counter: { value, step } }) => ({
//   value,
//   step,
// });

// export default connect(mapStateToProps, actions)(Counter);

//WITH SLICE TOOLKIT

import { connect } from "react-redux";
import * as actions from "./redux/counter/reducer";

const Counter = ({ step, value, onSetStep, onIncrement, onDecrement }) => {
  const handleChangeStep = (e) => onSetStep(Number(e.target.value));
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

export default connect(mapStateToProps, actions)(Counter);
