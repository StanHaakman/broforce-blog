import '../styles/_home.sass'

const Home = () => {

    const handleClick = (e) => {
        console.log('Hello bros ', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello' + name, e.target);
    }

  return (
      <div className="home">
          <h2 className="font-semibold">Homepage</h2>
          <button onClick={handleClick}>Click me</button>
          <button onClick={(e) => handleClickAgain('Mario', e)}>Click me again</button>
      </div>
  );
}

export default Home;