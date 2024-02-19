import React from "react";
import "../../../sass/footer.scss";

function Footer() {
  return (
    <div className="listtotal">
      <div className="mini">
        <div className="data">
          <div className="head">
            <h1>Yeniliklərdən xəbərdar ol!</h1>
          </div>
          <div className="email">
            <form className="mt-4" action="">
              <input type="text" placeholder="Email" />

              <button type="submit" className="send">
                Göndər
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </button>
            </form>
            <hr />
          </div>

          <div className="foot">
            <div>
              <table>
                <tr>
                  <td>Xidmətlər</td>
                  <td>Layihələr</td>
                  <td>Haqqımızda</td>
                </tr>
                <tr>
                  <td>Whatsapp</td>
                  <td>Linkedin</td>
                  <td>İnstagram</td>
                </tr>
              </table>
            </div>
            <button className="arrow">
              <svg
                className="child"
                width="53"
                height="70"
                viewBox="0 0 53 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.012 9.15986L28.0122 6.9819L29.5446 8.52195L48.7936 27.8672C49.3758 28.4523 50.3547 28.4524 50.9372 27.8669C51.5197 27.2815 51.5196 26.2977 50.9375 25.7126L27.5702 2.22847C27.4376 2.09525 27.2888 1.99456 27.055 1.89389L27.055 1.89393L27.0471 1.89044C26.7087 1.7408 26.2884 1.74082 25.9499 1.89054L25.9499 1.89058L25.9419 1.894C25.7081 1.99471 25.5592 2.09546 25.4266 2.22875L2.05557 25.7167C1.47305 26.3021 1.47312 27.2859 2.0553 27.871C2.63748 28.4561 3.61638 28.4561 4.1989 27.8707L23.451 8.52234L24.9837 6.98194L24.9835 9.16039L24.9789 67.338C24.9788 68.1661 25.669 68.8597 26.4929 68.8596C26.9249 68.8596 27.2917 68.6893 27.5648 68.4148C27.8379 68.1403 28.0073 67.7717 28.0074 67.3375L28.012 9.15986Z"
                  fill="#E4E4E4"
                  stroke="#121212"
                  stroke-width="1.8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
