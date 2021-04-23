import React from "react";
import Link from "next/link";

const Header = ({ background, text, smallText, button }) => {
  return (
    <header>
      <div id="intro" class="text-center bg-image">
        <div
          id="intro"
          class="text-center bg-image"
          style={{ backgroundImage: `url(${background})`, height: "70vh" }}
        >
          <div class="mask">
            <div class="d-flex justify-content-center align-items-center h-100 mt-4">
              <div>
                <h1 class="display-1 font-weight-bold">{text}</h1>
                <hr class="my-4" />
                <h4 class="font-weight-light mb-4">{smallText}</h4>
                {!!button && (
                  <Link href="/contact">
                    <button class="btn btn-lg btn-success" id="green-btn">
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
