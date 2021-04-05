import React, {Component} from 'react';


class Footer extends Component {
  
  constructor(props){
    
       super(props);
  }
  
  render(){
    
    return(
      
      <div  className="myaddr">
      <div className="myaddr2">
      <h3>My Address</h3>
      <address>
 <span className="a1"> Area P House 21B,</span> <span className="a1"> Yekepa,</span>
      <span className="a1"> Nimba County,</span>
    <span className="a1">  Liberia </span>
      </address>
      
      <h3 id="myco">My Contact</h3>
<span className="a1">Tel:+231881920014</span> <span className="a1"> Tel:+231777888046</span>
      <span className="a1"><a href="mailto:deboy170@gmail.com">Email Me</a></span>
      </div>
      </div>
      
      );
    
  }
  
  
}


export default Footer;