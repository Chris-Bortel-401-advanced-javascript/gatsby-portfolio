import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Scroll from '../components/Scroll';

import bortelShop from '../assets/images/bortel-shop.jpg';
import xdr from '../assets/images/xdr.jpg';
import ransomwareMitigation from '../assets/images/ransomware-mitigation.jpg';
import incidentResponse from '../assets/images/incident-response.jpg';
import surfer from '../assets/images/surfer.jpg';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              <strong>Chris Bortel</strong>
              <br />
              Software developer
            </h2>
            <p>Below are a couple of projects that I have been working on</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Check them out
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <div className="row">
            {/* Project 1 */}
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://github.com/Chris-Bortel-401-advanced-javascript/bortel-shop"
                  alt="Link to Bortel's Shop Github Repo"
                  target="_blank"
                  rel="noreferrer"
                  className="image fit"
                >
                  <img src={bortelShop} alt="bortel-shop.jpg" />
                  <header>
                    <h3>Bortel Shop</h3>
                    <p>Fullstack Crud Application</p>
                  </header>
                </a>
              </article>
            </div>

            {/* Project 2 */}
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://www.extrahop.com/solutions/security/xdr/"
                  alt=""
                  target="_blank"
                  rel="noreferrer"
                  className="image fit"
                >
                  <img src={xdr} alt="Screenshot of ExtraHop XDR page" />
                  <header>
                    <h3>Strategic XDR</h3>
                  </header>
                </a>
              </article>
            </div>

            {/* Project 3 */}
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://www.extrahop.com/solutions/security/ransomware-prevention/"
                  alt=""
                  target="_blank"
                  rel="noreferrer"
                  className="image fit"
                >
                  <img
                    src={ransomwareMitigation}
                    alt="Screenshot of ExtraHop Ransomware Mitigation page"
                  />
                  <header>
                    <h3>Ransomware Mitigation</h3>
                  </header>
                </a>
              </article>
            </div>

            {/* Project 4 */}
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://www.extrahop.com/products/services/incident-response-service/"
                  alt=""
                  target="_blank"
                  rel="noreferrer"
                  className="image fit"
                >
                  <img src={incidentResponse} alt="bortel-shop.jpg" />
                  <header>
                    <h3>Incident Response</h3>
                  </header>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={surfer} alt="" />
          </a>
          {/* TODO: Needs revisions, I really dislike the way that the text is justified*/}
          <p>
            I am a full stack JavaScript software developer based in Seattle,
            WA. As a graduate of Code Fellows’ intensive software development
            program and the University of Washington’s full stack JS web
            development bootcamp, I strive to build innovative software with a
            meaningful purpose.
            <br />
            <br />
            My professional career began in special education, where I managed a
            classroom and the curriculum of ten students. I helped to develop
            strategies and response plans to provide the best services and
            solutions for students and the families I worked with, setting and
            achieving goals that benefitted all involved. That kind of growth
            mentality is what I enjoy about software development. Being able to
            see the progress made over months of planning and execution is
            something that excited me while working in public schools, and
            drives me forward in the field of software development. I strive to
            make any project that I work on better than what I started with.
            <br />
            <br />
            In my spare time, I like to surf, cycle, develop my amateur
            woodworking skills, and hang out with my wife and dog.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            I cannot wait to start a conversation about what we can build
            together. I can be reached via LinkedIn and email. Thank you for
            your interest!
          </p>

          {/* <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form> */}
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
