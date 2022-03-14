import { useState } from "react";
import '../styles/_home.sass'
import Bloglist from "./Blogslist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsoum...', author: 'Mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsoum...', author: 'Yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsoum...', author: 'Luigi', id: 3}
    ]);

    return (
      <div className="home">
          <Bloglist blogs={blogs} title="All blogs"/>
          <Bloglist blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's blogs"/>
      </div>
    );
}

export default Home;