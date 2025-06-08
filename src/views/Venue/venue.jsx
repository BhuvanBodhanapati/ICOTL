import React from "react";
import venueBg from "./../../assets/venueBg.jpg";
import "./venue.css";

export default function Venue() {
  return (
    <div>
      <div className="venueDetailsDiv">
        <div className="VenueBgImgDiv">
          <img className="venueBgImg" src={venueBg} />
          <div className="venueDetailsBody">
            <div>
              <p className="venueHeader">
                In Person | Bengaluru | 7<sup>th </sup>- 8<sup>th</sup> December, 2026
              </p>
              <p className="venueTitle">Clarks Exotica Convention Resort</p>
              <span>
              Near Bengaluru Airport, Devanahalli Road, Hollywood Junction,<br/> Sadahalli Post, Swiss Town, Bengaluru, Karnataka, 562110
              </span>
              <div>
                <div className="venueMap">
                  <iframe
                    className="gmap_iframe"
                    width="auto"
                    height="400px"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60380.96943564769!2d77.66433176233043!3d13.20071497168941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16773c548eed%3A0x115debba50e73b75!2sClarks%20Exotica-%20Convention%20Resorts%20%26%20Spa!5e0!3m2!1sen!2sin!4v1680670451004!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
