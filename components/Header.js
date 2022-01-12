import React ,{useEffect, useState} from "react";
import Link from "next/link";


const Header = ({ background, text, smallText, button, mask, full }) => {
  
  const [bgImage, setBgImage] = useState("/images/Phone/");

  useEffect(() => {
    const pageresized = () => {
      if (window.innerWidth > 992)
      setBgImage("/images/Desktop/");
      else
      setBgImage("/images/Phone/");
    }
    pageresized();

    window.addEventListener("resize", pageresized);
    return () => window.removeEventListener("resize", pageresized);
});

const showMask = !mask ? "mask" : "";

  return (
    <header style={{/*marginTop: '100px'*/}}>
      <div className="text-center bg-image" id="intro-sm" >
        <div className="text-center bg-image"
          style={{ backgroundImage: `url(${bgImage}${background})`,backgroundPosition: 'center top' }} id="intro2-sm" >
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
   const [bgImage, setBgImage] = useState("/images/Phone/");

  useEffect(() => {
    const pageresized = () => {
      if (window.innerWidth > 992)
      setBgImage("/images/Desktop/");
      else
      setBgImage("/images/Phone/");
    }
    pageresized();

    window.addEventListener("resize", pageresized);
    return () => window.removeEventListener("resize", pageresized);
});

  const showMask = !mask ? "mask" : "";
  
    return (
      <header style={{/*marginTop: '100px'*/}}>
        <div id="intro" className="text-center bg-image homeheader" >

          <div className="text-center bg-image homeheader" id="intro2" 
            style={{ backgroundImage: `url(${bgImage}${background})`, backgroundPosition: 'center' }}
          >
            <div className={showMask}>
              <div className="d-flex justify-content-center align-items-center h-100 ">
                <div  style={{position: "absolute", bottom: '0', padding: '12px 12px 0 12px'}} className="header-text-hightlight-box">
                  <h1 className="display-4"style={{marginBottom: "12px", fontWeight: '400'}}>
                  {text}
                    {/* <strong>{text}</strong> */}
                  </h1>
                  <h4 className="font-weight-light mb-3 px-2"><strong>{smallText}</strong></h4>
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