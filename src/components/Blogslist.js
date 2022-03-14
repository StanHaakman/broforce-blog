const Bloglist = ({blogs, title, handleDelete}) => {


return (
        <div className="blog-list">
            <h2 className="text-center text-lg">{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview p-10 my-4 bg-gray-100 rounded-xl hover:bg-gray-200 hover:cursor-pointer hover:shadow-lg hover:rounded-3xl transition-all" key={blog.id}>
                    <h3 className="text-xl font-medium">{blog.title}</h3>
                    <p className="text-md">Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;