import React from "react";
import "./../../../sass/Header.scss";
const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <div className="header_box">
                <div>
                  <p>
                    {" "}
                    <span>M</span>arkanızın{" "}
                  </p>
                  <p> rəqəmsal </p>
                  <p> ünvanı </p>
                </div>
                <button type="button" class="btn btn-primary">Primary</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

