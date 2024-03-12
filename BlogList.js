const BlogList = (props) => {
    const blogs = props.blogs;
    const head = props.headline;
    const handleDelete = props.handleDelete;

    return (  
        <div className="blog-list">
            <h1>{head}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() =>handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>


    );
}
 
export default BlogList;