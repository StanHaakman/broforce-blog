import './App.sass';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
      return (
        <div className="App">
            <Navbar />
          <div className="content text-center">
              <Home />
          </div>
        </div>
      );
}

export default App;
