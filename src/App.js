import logo from './logo.svg';
import './App.css';
import { List } from './buttons/list buttons.js';
import { ClickCounter } from './buttons/buttons.js';
import { Hello } from './buttons/button.js';
// import pic from './ukr.jpg';

// function MyText() {
//   return (
//     <><h4>Коли сказав що нападеш на Луганському напрямку,а напав на Херсонькому</h4><img src={pic} alt="logo" /></>
//   );
// }

// function MyText(props) {
//   return(
//     <div>{props.text}</div>
//   )
// }
// const Names = ['Ганна ',' Іван ',' Поліна ',' Макс ',' Олексій '];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <MyText/> */}
        {/* <MyText text="hello"/>
        <MyText text="world"/> */}
        {/* <List items={Names}/>
        <ClickCounter /> */}
        { <Hello/> }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
