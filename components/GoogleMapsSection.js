import React from 'react';

const GoogleMapsSection = () => {
    return (
        <div className="map-area">
             {/* <iframe src="https://maps.google.com/maps?q=263%20Haydons%20Rd,%20London%20SW19%208TY&t=&z=15&ie=UTF8&iwloc=&output=embed" height="550"></iframe> */}
             <iframe src="https://maps.google.com/maps?q=BH23%206NW&t=&z=13&ie=UTF8&iwloc=&output=embed" height="550" width="100%"></iframe>  
            {/*https://google-map-generator.com/*/}
           
           {/* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=BH23%206NW&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google maps api html</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div> */}
        </div>
    );
};

export default GoogleMapsSection;