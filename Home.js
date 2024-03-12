import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const  Home = () => {
    const [blogs, setBlogs] = useState([
        
    {title: 'I bought airplane', body: 'Lorem ipsum...', author: 'Yoshi', id: 0},
    {title: 'I was hired like Glovo courier', body: 'Lorem ipsum...', author: 'Mario', id: 1},
    {title: 'I was raised to main director of Amazon Corporation', body: 'Lorem ipsum...', author: 'Luigi', id: 2},
    {title: 'Travelling in Europe by smart', body: 'Lorem ipsum...', author: 'Yoshi', id: 3},
    {title: 'I was hired like killer', body: 'Lorem ipsum...', author: 'Mario', id: 4},
    {title: 'How i played Fiona role in \'Shrek 3\'', body: 'Lorem ipsum...', author: 'Luigi', id: 5}
    ])

    const title = 'All blogs:';


    const handleDelete = (id) =>{
        const newBlogs = blogs.filter((blog) => (blog.id !== id));
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log('effect run');
        console.log(blogs);
        
    }, [blogs]);

    
    return (  
        <div className="home">
        <BlogList blogs={blogs} headline={title} handleDelete={handleDelete}></BlogList>

        {/* <BlogList blogs={blogs.filter((blog) => (blog.author==='Mario'))} headline="Mario's Blogs:"></BlogList>
        <BlogList blogs={blogs.filter((blog) => (blog.author==='Luigi'))} headline="Luigi's Blogs:"></BlogList> */}
 
 
        </div>
    );
}
 
export default Home;
