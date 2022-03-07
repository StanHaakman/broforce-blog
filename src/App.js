import './App.sass';

function App() {
    const title = 'Welcome to the new blog';
    const likes = 50;
    const person = {name: 'yoshi', age: 30};
    const googleLink = "https://www.google.com";

      return (
        <div className="App">
          <div className="content text-center">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p>Liked {likes} times</p>

              <p>{10}</p>
              <p>{"hello ninjas"}</p>
              <p>{[1,2,3,4,5,6]}</p>
              <p>{Math.random() * 10}</p>

              <a href={googleLink} target={"_blank"}>Google site</a>
          </div>
        </div>
      );
}

export default App;
