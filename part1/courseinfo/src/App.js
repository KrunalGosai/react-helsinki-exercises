import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function App() {
  const course = 'Half Stack application development'
  // const content = {
  //   part1 : 'Fundamentals of React',
  //   exercises1 : 10,
  //   part2 : 'Using props to pass data',
  //   exercises2 : 7,
  //   part3 : 'State of a component',
  //   exercises3 : 14
  // }
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content part1={part1} part2={part2} part3={part3}></Content>
      <Total part1={part1} part2={part2} part3={part3}></Total>
    </div>
  );
}

export default App;