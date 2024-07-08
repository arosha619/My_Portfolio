import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey,👋 I'm Arosha Sandaruwan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"> &lt;Full Stack</span>{" "}
            <br />
            Developer/&gt;
          </h1>
          <p className="hero--section-description">
            Fourth Year IT Undergraduate
            <br /> at Faculty of Information Technology, University of Moratuwa.
            <br />
            <span style={{ fontSize: "bold", fontFamily: "italic" }}>
              <br />
              "I believe if we view things differently, we can create a
              different reality"
            </span>
          </p>
        </div>
        <div className='containerz'>
        <a
          href="https://drive.google.com/file/d/123CUV0WJl2LCMDUDTw3Gy0-eD3i2PxLx/view?usp=sharing"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{marginTop:"10px"}}
        >
          Download CV
        </a>
        
        <div className="hero--social--icon">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/facebook.png"
                  alt="Facebook"
                  width="32"
                  height="32"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/instagram.png"
                  alt="insta"
                  width="32"
                  height="32"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/twitter.png"
                  alt="twitter"
                  width="32"
                  height="32"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arosha-sandaruwan-726077213/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/linkedin.png"
                  alt="linkedin"
                  width="32"
                  height="32"
                />
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="hero--section--img">
        <img src="./img/arosha.png" alt="Hero Section" />
        <div className="logos">
          <img src="./img/java.png" alt="JavaScript" className="logo js" />
          <img src="./img/js.png" alt="ls" className="logo ls" />
          <img src="./img/github.png" alt="React" className="logo react" />
          <img src="./img/css-3.png" alt="CSS" className="logo css" />
          <img src="./img/html-5.png" alt="HTML" className="logo html" />
          <img src="./img/mysql.png" alt="Python" className="logo python" />
          <img src="./img/react.png" alt="Java" className="logo java" />
          <img src="./img/nodejs.png" alt="CSharp" className="logo csharp" />
        </div>
      </div>
    </section>
  );
}
