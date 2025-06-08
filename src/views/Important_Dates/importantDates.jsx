import React from 'react'
import './importantDates.css'

export default function ImportantDates() {
  return (
    <div className="impDatesBody">
      <div className="comingSoonMessage" style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem', fontWeight: 'bold' }}>
        Announcement will be made soon.
      </div>
      <div className="impDateBar" style={{ display: 'none' }}>
        <div className="uptimepointBox box1">
          <div className="date">
            <h3 className="dateTitle">
              Start - 1<sup>st</sup> May 2023
            </h3>
            <p>
              <strong>
              Paper Submisson opens &{" "}
                Application for Special Session Proposal Submission
              </strong>
            </p>
          </div>
          <div className="upTimebar" />
          <div className="point"></div>
        </div>
        <div className="bottomtimepointBox box2">
          <div className="point"></div>
          <div className="bottomTimebar" />
          <div className="date">
            <h3 className="dateTitle">
              1<sup>st</sup> June 2023
            </h3>
            <h3 className="">SS Submission Close</h3>
            <p>Special Session Proposal Submission Close</p>
          </div>
        </div>
        <div className="uptimepointBox box3">
          <div className="date">
            <h3 className="dateTitle">
              8<sup>th</sup> June 2023
            </h3>
            <h3 className="">Decision Notification</h3>
            <p>Special Session Decision Notification.</p>
          </div>
          <div className="upTimebar" />
          <div className="point"></div>
        </div>
        <div className="bottomtimepointBox box4">
          <div className="point"></div>
          <div className="bottomTimebar" />
          <div className="date">
            <h3 className="dateTitle">
              30<sup>th</sup> July 2023
            </h3>
            <h3 className="">Manuscript Submission</h3>
            <p>Paper Submisson closes </p>
          </div>
        </div>
        <div className="uptimepointBox box5">
          <div className="date">
            <h3 className="dateTitle">
              30<sup>th</sup> August 2023
            </h3>
            <h3 className="">Acceptance Notification</h3>
          </div>
          <div className="upTimebar" />
          <div className="point"></div>
        </div>
        <div className="bottomtimepointBox box6">
          <div className="point"></div>
          <div className="bottomTimebar" />
          <div className="date">
            <h3 className="dateTitle">
              15<sup>th</sup> October 2023
            </h3>
            <h3 className="">Camera Ready Submission & </h3>
            <h3 className="">Earlybird Registration</h3>
          </div>
        </div>
        <div className="uptimepointBox box7">
          <div className="date">
            <h3 className="dateTitle">
              6<sup>th</sup> - 7<sup>th</sup> February 2026
            </h3>
            <h3 className="">Date of Conference </h3>
          </div>
          <div className="upTimebar" />
          <div className="point"></div>
        </div>
      </div>
    </div>
  );
}
