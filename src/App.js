import logo from './logo.svg';
import Footer from './Components/FooterComponent';
import './App.css';

function App() {
  return (
    
     <div className="App-header">
      <nav>
      <ul className="main">
 
  <li><a href="#">Home</a></li> 
  <li><a href="#">Courses</a></li> 
  <li><a href="#">About Us</a></li> 
  <li><a href="#myco" className="last">Contact Us</a></li> 
      </ul>
      
      </nav>
      
      <header>
      <h1>Hey I'm Maxwell</h1>
      <p className="h-p">a fullstack web developer</p>
      
      
      </header>
<div className="row">
  <div className="column col1">
    <h2>Web Development</h2>
    <p>What You Will Learn</p>
    <p>You Learn HTML5, CSS3, Javascript(ES6)</p>
  </div>
  <div className="column col2">
    <h2>Intro To Programming</h2>
    <p>Objective:</p>
    <p>You will understand how computer works</p>
    
  </div>
</div>

      
       
      <div className="App">
      <div className="container">
      <h1>iTech </h1>
      <p>I'm testing My React</p> 
      <p>Development Environment</p>
      <p> Doing fullstack web on Android is enjoyable when using Termux </p>
      
      </div>
      </div>
  <Footer />
    </div>
    
  );
}

export default App;
