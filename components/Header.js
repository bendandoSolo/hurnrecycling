import React from "react";
import Link from "next/link";

const Header = ({ background, text, smallText, button, mask, full }) => {

const showMask = !mask ? "mask" : "";

const size =  full ? "70vh" : "35vh";

  return (
    <header style={{marginTop: '100px'}}>
      <div className="text-center bg-image" style={{height: size }}>
        <div
          className="text-center bg-image"
          style={{ backgroundImage: `url(${background})`, height: size }}
        >
          <div className={showMask}>
            <div className="d-flex justify-content-center align-items-center h-100 ">
              <div>
                <h1
                  className="display-1"
                  style={{
                    marginBottom: "36px",
                  }}
                >
                  <strong>{text}</strong>
                </h1>
                {/* <hr className="my-4" /> */}
                <h4 className="font-weight-light mb-4 px-2">{smallText}</h4>
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

  const showMask = !mask ? "mask" : "";
  
  const size =  full ? "70vh" : "35vh";
  
    return (
      <header style={{marginTop: '100px'}}>
        <div className="text-center bg-image" style={{height: size }}>
          <div
            className="text-center bg-image"
            style={{ backgroundImage: `url(${background})`, height: size, backgroundPosition: 'bottom center' }}
          >
            <div className={showMask}>
              <div className="d-flex justify-content-center align-items-center h-100 ">
                <div style={{position: 'absolute', bottom: '30px'}}>
                  <h1
                    className="display-1"
                    style={{
                      marginBottom: "24px",
                    }}
                  >
                    <strong>{text}</strong>
                  </h1>
                  {/* <hr className="my-4" /> */}
                  <h4 className="font-weight-light mb-4 px-2">{smallText}</h4>
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