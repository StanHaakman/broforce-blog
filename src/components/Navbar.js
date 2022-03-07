import './../styles/_navbar.sass'

const Navbar = () => {
  return (
      <div className="navigation border-b">
          <nav className="navbar flex items-center p-5 m-auto max-w-4xl">
              <h1 className="font-bold">The Bro Force Blog</h1>
              <div className="links ml-auto">
                  <a href="/">Home</a>
                  <a href="/create">New Blog</a>
              </div>
          </nav>
      </div>
  );
}

export default Navbar;