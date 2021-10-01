import './index.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Revz Blogs</h1>
            <div className="link">
                <a href="/">Home</a>
                <a href="/create" >New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;