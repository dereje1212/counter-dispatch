import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from './/store/index'

function App() {
 const counter = useSelector((state)=>state.counter);
   const dispatch= useDispatch();
  const increment =()=>{
      dispatch(actions.increment());
   }
   const decrement =()=>{
       dispatch(actions.decrement());
   }
   const addby =()=>{
      dispatch(actions.addby(5));
  }
  return (
  <div>
       <h1 className='h'> Simple Counter</h1>
      <h2>{counter}</h2>
      <button className='bt1' onClick={increment}>Increment</button>
      <button className='bt2' onClick={decrement}>Decrement</button>
      <button className='bt3' onClick={addby}>ADD</button> 
  </div>
    
  );
}

export default App;

