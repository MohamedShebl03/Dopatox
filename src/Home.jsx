import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Apple from "./assets/Apple.png";
import Google from "./assets/Google.png";
import Group5 from "./assets/Group 5.png";
import Sand from "./assets/Group 6.png";
import Star9 from "./assets/Star 9.png";
import Image2 from "./assets/Image2.png";
import Image from "./assets/Image.png";
import Frame6 from "./assets/Frame 94906.png";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 130 });
  }, []);
  return (
    <>
      {/* Header */}
      {/*<!-------------------------------------------------------------------->*/}
      <header>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="app-info ps-5 col-md-6">
              <h1 data-aos="fade" data-aos-delay="0">
                Regain Control of <br />
                Your Digital Life
              </h1>
              <p data-aos="fade" data-aos-delay="200">
                💡Reduce screen time, stay productive, and build healthier digital
                habits with AI-powered insights and challenges.
              </p>
              <a className="me-4" data-aos="fade" data-aos-delay="300">
                <img src={Apple} alt="install-apple"
                /></a>
              <a data-aos="fade" data-aos-delay="300">
                <img src={Google} alt="install-google"
                /></a>
            </div>
            <div className="app-img col-md-6" data-aos="fade-right">
              <div className="mobile-img ms-auto position-relative">
                <img width="100%" src={Group5} alt="app-image" />

                <img
                  className="position-absolute start-0"
                  width="60px"
                  height="60px"
                  src={Sand}
                  alt="sand-glass"
                />

                {/*<!-- Floating Tags -->*/}
                <div className="floating-tag tag-top">
                  Take back control of your time⏳
                </div>
                <div className="floating-tag tag-middle">
                  Fun challenges, better productivity!🚀
                </div>
                <div className="floating-tag tag-bottom">
                  Life beyond the screen matters!🌱
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*<!-------------------------------------------------------------------->*/}

      {/* Features */}
      <section id="features">
        <div className="container">
          <div className="header-section-txt text-center mb-5" data-aos="fade-up">
            <span>Features</span>
            <h1>What can Dopatox Do ?</h1>
          </div>
          <div
            className="features row align-items-center justify-content-between"
            data-aos="fade-up"
          >
            <div
              className="f-img col-md-6 order-2 order-md-1"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img className="d-block ms-auto" src={Star9} alt="star" />
              <img width="100%" src={Image} alt="feature-1" />
            </div>
            <div
              className="f-descrip col-md-6 order-1 order-md-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>Close the app after the time expires</h2>
              <p>
                As soon as your allowed time is up on any app, DOPATOX
                automatically shuts it down to prevent any overuse, with smart
                options to reopen like challenges or waiting until the next day.
              </p>
            </div>
          </div>
          <div className="features row align-items-center justify-content-between">
            <div
              className="f-descrip col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>Explore This Fantastic App</h2>
              <p>
                Uncover the potential of this fantastic app that enhances your
                daily tasks. With its intuitive design and powerful features, it's
                perfect for improving efficiency and enjoyment.
              </p>
            </div>
            <div className="f-img col-md-6" data-aos="fade-left" data-aos-delay="200">
              <img className="d-block me-auto" src={Star9} alt="star" />
              <img width="100%" src={Image2} alt="feature-2" />
            </div>
          </div>
          <div className="features row align-items-center justify-content-between">
            <div
              className="f-img col-md-6 order-2 order-md-1"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img className="d-block ms-auto" src={Star9} alt="star" />
              <img width="100%" src={Image} alt="feature-1" />
            </div>
            <div
              className="f-descrip col-md-6 order-1 order-md-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2>Close the app after the time expires</h2>
              <p>
                As soon as your allowed time is up on any app, DOPATOX
                automatically shuts it down to prevent any overuse, with smart
                options to reopen like challenges or waiting until the next day.
              </p>
            </div>
          </div>
          <div className="features row align-items-center justify-content-between">
            <div
              className="f-descrip col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2>
                Smart Chat <br />
                BOT
              </h2>
              <p>
                An AI-powered bot that talks to you to motivate you to reduce
                phone usage, offers tips and reminds you of your digital goals in
                a friendly and personal way.
              </p>
            </div>
            <div className="f-img col-md-6" data-aos="fade-left" data-aos-delay="200">
              <img className="d-block me-auto" src={Star9} alt="star" />
              <img width="100%" src={Image2} alt="feature-2" />
            </div>
          </div>
        </div>
      </section>
      {/*<!-------------------------------------------------------------------->*/}

      {/* Screenshots */}
      <section id="screenshots">
        <div className="container">
          <div className="header-section-txt text-center mb-5" data-aos="fade-up">
            <span>Screenshoots</span>
            <h1>Some Screenshoots for Dopatox</h1>
          </div>
          <div
            className="screen-img text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img width="90%" src={Frame6} alt="screen-shot" />
          </div>
        </div>
      </section>
      {/*<!-------------------------------------------------------------------->*/}

      {/*<!--------------------------FAQS---------------------------->*/}
      <section id="faqs">
        <div className="container">
          <div className="header-section-txt text-center mb-5" data-aos="fade-up">
            <span>FAQS</span>
            <h1>Frequently Asked Questions</h1>
          </div>
          {/*<!--------------------------Questions---------------------------->*/}
          <div className="accordion" id="faqAccordion" data-aos="fade-up">
            {/*<!-- Question 1 -->*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingMain">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseMain"
                  aria-expanded="true"
                  aria-controls="collapseMain"
                >
                  How does Digital Detox work?
                </button>
              </h2>
              <div
                id="collapseMain"
                className="accordion-collapse collapse show"
                aria-labelledby="headingMain"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Digital Detox helps you track and reduce screen time with AI,
                  challenges, and smart restrictions to build healthier digital
                  habits. 🚀📱
                </div>
              </div>
            </div>

            {/*<!-- Question 2 -->*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Can I set a daily usage limit?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, you can set a custom daily screen time limit in the app's
                  settings.
                </div>
              </div>
            </div>

            {/*<!-- Question 3 -->*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is Smart Punishment Mode?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Smart Punishment Mode enforces restrictions when screen time
                  limits are exceeded.
                </div>
              </div>
            </div>

            {/*<!-- Question 4 -->*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How do I start a new challenge?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can start a new challenge from the main dashboard by
                  clicking on "New Challenge".
                </div>
              </div>
            </div>

            {/*<!-- Question 5 -->*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How do I start a new challenge?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can start a new challenge from the main dashboard by
                  clicking on "New Challenge".
                </div>
              </div>
            </div>

            {/*<!-- Question 6 -->*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  How do I start a new challenge?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can start a new challenge from the main dashboard by
                  clicking on "New Challenge".
                </div>
              </div>
            </div>

            {/*<!-- Question 7 -->*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  How do I start a new challenge?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can start a new challenge from the main dashboard by
                  clicking on "New Challenge".
                </div>
              </div>
            </div>

            {/*<!-- Question 8 -->*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  What features are coming next?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We are constantly working on adding new features like goal
                  tracking, advanced analytics, and more customizable challenges
                  to enhance your experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default Home
