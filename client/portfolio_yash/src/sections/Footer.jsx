const Footer = () => {

    const date = new Date().getFullYear();

    const style = {
        color:'white'
    }


    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5" style={{backgroundColor:'rgb(58 58 73'}}>
        <div className="flex gap-2" style={style} >
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
            <a href="https://github.com/yashsabne" >
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
            </a>
        </div>
  
        <p className="text-white-500" style={style}>© {date}  Yash Sabne. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
