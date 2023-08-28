import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="portfolio">My portfolio</div>
        <div className=" flex items-center">
          <div>
            <div className="icons">
              <div className="badge ">
                <a
                  href="https://www.linkedin.com/in/mohamad-lakees-4b2869238/"
                  target="_blank"
                  rel="noreferrer"
                >
                  in
                </a>
              </div>
              <div className="badge ">
                <a href="/" target="_blank" rel="noreferrer">
                  f
                </a>
              </div>
              <div className="badge ">
                <a href="/" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-instagram"></i>{" "}
                </a>
              </div>
            </div>

            <div className="copyright">
              <p>Copyright 2022. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
