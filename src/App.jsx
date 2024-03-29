
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';

function App() {
  function handleClick(){
    alert('click me button');
  }

  const handleClick2 = () => {
    alert('button 2 click');

  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>Explore react core concepts part 2</h3>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('third button clicked')}}>third </button>
      <button onClick={() => addToFive(3) }>Four</button>
    </>
  )
}

export default App
