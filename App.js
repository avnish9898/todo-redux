import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import store from './store'
import { Provider } from "react-redux";
import Todo from './component/Todo'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Ball></Ball>
      <Bat></Bat>
      <User></User> */}
   
      <Todo/>
      {/* <TaskList></TaskList> */}
  
    </div>
  </Provider>
  );
}

export default App;
