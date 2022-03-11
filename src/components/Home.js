import { useState } from "react";
import '../styles/_home.sass'

const Home = () => {
    // let name = 'Stan';
    const [name, setName] = useState('Stan');
    const [age, setAge] = useState(21);

    const handleClick = () => {
        setName('Stan Haakman');
        setAge(30);
    }

  return (
      <div className="home">
          <h2 className="font-semibold text-3xl pb-10">Homepage</h2>
          <p>{ name } is { age } years old</p>
          <button onClick={handleClick}>Click me</button>
      </div>
  );
}

export default Home;