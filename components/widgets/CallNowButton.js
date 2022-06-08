import React from 'react';

//centered by default
const CallNowButton = ({margin}) => {
    return (
        <div className="call-now-navbar-button horizontal-center-singleitem">
                   <a href="tel:+441202257530"><button type="button" className={`btn btn-success btn-lg ${margin}`}>CALL 01202 257 530 <i className="fas fa-phone ps-2"></i></button></a>
        </div>
    );
};

export default CallNowButton;