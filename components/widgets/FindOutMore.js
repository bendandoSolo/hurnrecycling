import React from 'react';
import Link from "next/link";

const FindOutMore = () => {
    return (
        <div className='horizontal-center-singleitem container pb-5'>
        <div><p className="lead mb-4 pb-1">
                To find out more, call us on <a href="tel:+441202257530" className="highlight-link"> <i className="fas fa-phone ps-2" /> 01202 257 530</a> or <Link href="/contact" ><a className="highlight-link">contact us</a></Link> for a quote. If out of office hours leave a message and we will get right back to you.
              </p>
              <div className='horizontal-center-singleitem'>
              <Link href="/contact">
                <button className="btn btn-lg btn-success text-center mb-4 me-4" id="green-btn">
                  Contact Us
                </button>
              </Link>
              <a href="tel:+441202257530"><button className="btn btn-lg btn-success text-center mb-4 ms-4" id="green-btn">
                  Call Now
                </button></a>
              </div>
          </div>
      </div>
    );
};

export default FindOutMore;