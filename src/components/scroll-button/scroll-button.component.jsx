
import React from "react";
import './scroll-button.styless.scss'

class ScrollButton extends React.Component{
state = {
    scrollPosition: 0
}    
     scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } 
componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    
}   
componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
} 
handleScroll = () => {
    const position = window.pageYOffset;
    this.setState({scrollPosition: position})
}

   

      
 render() {
     const {scrollPosition} = this.state
    
    return(

    
        <div className={scrollPosition >= 150 ? 'scroll active' : 'scroll'} onClick={this.scrollToTop} ></div>  
    
                
    ) 
    
}     
    


}

export default ScrollButton