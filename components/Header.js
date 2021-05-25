import React from "react";
import Link from "next/link";

const Header = ({ background, text, smallText, button }) => {
  return (
    <header>
      <div id="intro" className="text-center bg-image">
        <div
          id="intro"
          className="text-center bg-image"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="mask">
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
