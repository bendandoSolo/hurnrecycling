import React ,{useEffect, useState} from "react";
import Link from "next/link";


const Header = ({ background, text, smallText, button, mask, full }) => {
  
  //const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {

    console.log("use effect called");
    //console.log(screenWidth);
    
    const pageresized = () => {
      //  console.log(window.innerWidth);
      //  setScreenWidth(window.innerWidth);
    }



    window.addEventListener("resize", pageresized);
    return () => window.removeEventListener("resize", pageresized);
});


const showMask = !mask ? "mask" : "";

const size =  full ? "70vh" : "35vh";

  return (
    <header style={{/*marginTop: '100px'*/}}>
      <div className="text-center bg-image" style={{height: size }}>
        <div
          className="text-center bg-image"
          style={{ backgroundImage: `url(${background})`, height: size }}
        >
          <div className={showMask}>
            <div className="d-flex justify-content-center align-items-center h-100 ">
              <div className="header-text-hightlight-box">
                <h1
                  className="display-1 py-2"
                  style={{
                    marginBottom: 0
                  }}
                >
                  <strong>{text}</strong>
                </h1>
    
                {!!smallText && <h4 className="font-weight-light px-2">{smallText}</h4>}
                {!!button && (
                  <Link href="/contact">
                    <button
                      className="btn btn-lg btn-success mt-2"
                      id="green-btn"
                    >
                      Get A Quote
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


export const HomeHeader = ({ background, text, smallText, button, mask, full }) => {

   const [bgImage, setBgImage] = useState("");

  useEffect(() => {

    const pageresized = () => {
      //console.log(window.innerWidth);
      if (window.innerWidth > 992)
      setBgImage("/images/Desktop/");
      else
      setBgImage("/images/Phone/");
    }
    pageresized();

    window.addEventListener("resize", pageresized);
    return () => window.removeEventListener("resize", pageresized);
});

  // const desktopOrMobile = () => {
    
  //   if (window.innerWidth > 992) 
  //   return "desktop";
  //   else return "mobile"; 
  // } 



  const showMask = !mask ? "mask" : "";
  
  const size =  full ? "70vh" : "35vh";
  
    return (
      <header style={{/*marginTop: '100px'*/}}>
        <div id="intro" className="text-center bg-image homeheader" /*style={{height: size }}*/ >
          <div
            className="text-center bg-image homeheader" id="intro2y
            yy" 
            style={{ backgroundImage: `url(${bgImage}${background})`, /*height: size,*/ backgroundPosition: 'bottom center' }}
          >

            <div className={showMask}>
              <div className="d-flex justify-content-center align-items-center h-100 ">
                <div className="header-text-hightlight-box" style={{position: "absolute", bottom: '0'}}>
                  <h1
                    className="display-1"
                    style={{
                      marginBottom: "12px",
                    }}
                  >
                    <strong>{text}</strong>
                  </h1>
                  {/* <hr className="my-4" /> */}
                  <h4 className="font-weight-light mb-2 px-2"><strong>{smallText}</strong></h4>
                  {!!button && (
                    <Link href="/contact">
                      <button
                        className="btn btn-lg btn-success my-2 mb-4"
                        id="green-btn"
                      >
                        
                        Get A Quote
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };