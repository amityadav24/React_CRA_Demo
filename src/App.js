import './App.css';
function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Parul University</h1>
        </div>
        <ul className="nav-link">
          <li><a href="Home">Home</a></li>
          <li><a href="Result">Result</a></li>
          <li><a href="Event">Event</a></li>
          <li><a href="Placement">Placements</a></li>
          <li><a href="Contact">Contact Us</a></li>
        </ul>
      </nav>

      <div className="img">
        <div className="portal-image">
          <img
            src="https://paruluniversity.ac.in/app/images/post/blog/featured_image/412491Gate%20Picture%20(1).jpg"
            alt="Parul University Gate"
          />
        </div>

        <div className="query">
          <h2>Query Form</h2>
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="number" placeholder="Enter Your Contact" />
          <input type="text" placeholder="Enter Your Course" />
          <button className="btn">Register</button>
        </div>
      </div>

      <div className="footer">
        <h1>&copy; All Rights Reserved</h1>
      </div>
    </>
  );
}

export default App;
