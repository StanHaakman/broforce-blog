import { useState } from "react";
import '../styles/_home.sass'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsoum...', author: 'Mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsoum...', author: 'Yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsoum...', author: 'Luigi', id: 3}
    ]);

    return (
      <div className="home">
          {blogs.map((blog) => (
              <div className="blog-preview p-10 my-4 bg-gray-100 rounded-xl hover:bg-gray-200 hover:cursor-pointer hover:shadow-lg hover:rounded-3xl transition-all" key={blog.id}>
                  <h3 className="text-xl font-medium">{blog.title}</h3>
                  <p className="text-md">Written by {blog.author}</p>
              </div>
          ))}
      </div>
    );
}

export default Home;