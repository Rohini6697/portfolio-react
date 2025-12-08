import React from "react";
// import "../styles/Popup.css";
import "../styles/ResumePop.css";

const ResumePopup = ({ close }) => {
  return (
    <div className="popupOverlay" onClick={close}>
      <div className="popupBox" onClick={(e) => e.stopPropagation()}>
        <h2>My Resume</h2>

        {/* PDF Viewer */}
        <iframe
          src="/rohini_resume.pdf"
          title="Resume"
          className="resume-viewer"
        ></iframe>

        {/* Download Button */}
        <a href="/resume.pdf" download className="downloadBtn">
          Download Resume
        </a><br/>

        {/* Close Button */}
        <button className="closeBtn" onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default ResumePopup;
