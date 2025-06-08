import React from "react";
import "./submission.css";
import { Typography } from "@mui/material";
import Link from "@mui/material";

export default function Submission() {
  return (
    <div className="submission">
      <p className="title">Paper Submission</p>
      <p className="submissionNote">
        You are welcome to present your latest works on optimization techniques
        & their application in various machine learning, data analysis model
        building and other applications. Submitted papers must be in a PDF
        format and should be original, unpublished, and not under submission to
        other conferences or journals.
      </p>
      <p className="submissionNote">
        The page limit for a full-length paper is 6 pages. Additional up to 2
        pages are acceptable with extra page charge for the 7th and 8th pages.
        Please check "Registration" page for details. Papers with less than 4
        pages or more than 8 pages will be rejected without review.
      </p>
      <p className="submissionNote">
        All submissions should be in the IEEE two-column format. Author's names
        and affiliation should be kept blank because of double blind review.
        Papers should contain up to 5 keywords. Papers will be evaluated for
        originality, significance, clarity, and soundness, and will be reviewed
        by at least three independent reviewers. Please note that ithenticate
        will be used for plagiarism detection.
      </p>
      <Typography variant="h5">LaTeX and Word Templates: </Typography>
      <p className="submissionNote">
        Please use the IEEE style files for conference proceedings as a
        template.
      </p>
      {/* <p className="submissionNote">
        Click here for more information (Please use US letter format!)
      </p> */}
      <a
        className="templateLink"
        href="https://www.ieee.org/conferences/publishing/templates.html"
        target="_blank"
        rel="noreferrer"
      >
        <p style={{ paddingBottom: 10 }}>
          Click here to download the IEEE paper template. (Please use US letter
          format!)
        </p>
      </a>

      <Typography variant="h5">Final Paper Submission Format:</Typography>
      <p className="submissionNote1">
        Authors of "Accepted" and "Revision Required" papers are advised to make
        necessary corrections and modifications suggested by the reviewers in
        the final camera ready manuscript and upload the final papers on or
        before 15
        <sup>th</sup> October, 2026. Paper should conform to IEEE format and
        certified by "pdf express".
        {/* Papers for presentations should conform to
        the IEEE format and specifications. Authors to submit the full final
        paper (Maximum 6 pages, double-column US letter size) as PDF using the
        IEEE templates. Extra pages beyond this would require additional page
        length charges. Please check "Registration" for details.{" "} */}
      </p>
      <a
        href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICOTL2026"
        target={"_blank"}
        className="submissionBtn"
      >
        Submit Your Paper
      </a>
    </div>
  );
}
