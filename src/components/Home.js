import {useEffect, useState} from "react";
import '../styles/_home.sass'
import Bloglist from "./Blogslist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsoum...', author: 'Mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsoum...', author: 'Yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsoum...', author: 'Luigi', id: 3}
    ]);

    const [name, setName] = useState('Mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log("use effect ran")
        return () => {
        };
    }, [name]);


    return (
      <div className="home">
          <button onClick={() => setName((name === 'Luigi' ? 'Mario': 'Luigi'))}>Change name</button>

          <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
          <Bloglist blogs={blogs.filter((blog) => blog.author === name)} title={name + " blogs"} handleDelete={handleDelete}/>
      </div>
    );
}

export default Home;