import React from "react";
import "./specialSession.css";
import EastIcon from "@mui/icons-material/East";

const SpecialSession = () => {
  return (
    <div className="specialSessionBody">
      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem', fontWeight: 'bold' }}>
        Announcement will be made soon.
      </div>
      <div style={{ display: 'none' }}>
        <p className="title">Call for Special Session Proposals (SS) </p>
        <p className="text">
          We are pleased to announce the invitation for proposals of special
          sessions (SS) at The First International Conference on Optimization
          Techniques for Learning (ICOTL 2026). The conference is scheduled to
          take place in Bengaluru, India, from February 6 to February 7, 2026.
          Special sessions aim to provide a platform for focused discussions on
          new or emerging topics of interest within a wide range of applications
          of optimization techniques in models and training algorithms. The SS
          organizers have the flexibility to choose between on-site and online
          presentation formats.
        </p>
        <p className="text">
          We welcome researchers, academicians, and industry experts to submit
          their proposals for special sessions, highlighting cutting-edge research
          and developments in optimization techniques for learning. Special
          sessions offer a unique opportunity to explore novel ideas, exchange
          knowledge, and foster collaborations in the field.
        </p>
        <p className="subTitle">Important Dates:</p>
        <div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p> Proposal Submission Deadline: July 1, 2023</p>
          </div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>Notification of Acceptance: July 8, 2023</p>
          </div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p> Full Paper Submission Deadline: July 30, 2023</p>
          </div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>Conference Dates: February 6-7, 2026</p>
          </div>
        </div>

        <p className="subTitle">Submission Guidelines:</p>
        <p className="text">
          Prospective organizers of special sessions are requested to submit their
          proposals electronically in PDF format. The proposal should include the
          following information:
        </p>
        <div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>Title of the Special Session</p>
          </div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>Presentation mode (on-site or online)</p>
          </div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>Name(s) and affiliation(s) of the organizer(s)</p>
          </div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>A brief biography of the organizer(s)</p>
          </div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>Session overview and objectives (approximately 500 words)</p>
          </div>
        </div>
        <p className="subTitle">Special Session Presentation Options:</p>
        <p className="text">
          ICOTL 2026 recognizes the importance of accommodating different
          presentation preferences. Therefore, special session organizers can
          choose between on-site or online presentation formats. This flexibility
          enables participants from around the world to engage in the conference,
          irrespective of their geographical location.
        </p>
        <p>Special session organizer(s) will be responsible for:</p>
        <div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>
              {" "}
              Soliciting and reviewing submissions for their special session,
              following the same timeline and guidelines as the main conference
            </p>
          </div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>
              Present a brief introduction and summary of their special session at
              the conference
            </p>
          </div>
          <div className="ssPointsDiv">
            <EastIcon />
            <p>
              Ensuring that their special session adheres to the ethical standards
              and code of conduct of ICOTL 2026
            </p>
          </div>
        </div>
        <p className="text">
          Proposals should be sent by email to chhsieh@gm.cyut.edu.tw by the
          specified deadline. All submissions will undergo a rigorous review
          process by the ICOTL 2026 organizing committee, and acceptance
          notifications will be sent accordingly.
        </p>
        <p className="text">
          We look forward to receiving your innovative proposals and welcoming you
          to ICOTL 2026. Together, let us explore the frontiers of optimization
          techniques for learning and shape the future of this exciting field.
        </p>
        <p className="text">
          For further updates and detailed information, please visit the ICOTL
          2026 website at <a href="icotl.in">https://icotl.in/.</a>
        </p>
        <p className="thankyouNote">
          Best Regards, <br/> ICOTL 2026 Organizing Committee
        </p>
      </div>
    </div>
  );
};

export default SpecialSession;
