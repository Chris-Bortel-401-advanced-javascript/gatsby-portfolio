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
                  <header className="project">
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
                  <header className="project">
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
                  <header className="project">
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
                  <header className="project">
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
            I am a frontend JavaScript software developer based in Seattle, WA.
          </p>
          <p>
            At my most recent position as a contract web developer at ExtraHop,
            I managed, developed, and worked on multiple high value, visible
            projects and campaigns concurrently across various organizational
            priorities and timelines. This has given me the opportunity to
            improve my technical skills, working in a stack of various languages
            (JavaScript, HTML5, CSS3, SCSS, JSON, Markdown, Hugo Templating), as
            well as practice communicating with stakeholders the technical
            options and constraints on a project. Working with designers to
            build out complicated pages based on detailed compositions has been
            particularly enjoyable and challenging. Learning how to talk shop
            with colleagues from design, marketing, content, and SEO that may
            not have a technical background has allowed for a greater
            understanding of their needs and an opportunity to be proactive in
            production to identify possible blockers and find ways to improve
            user experience.
          </p>
          <p>
            During my time at Code Fellows, as a student, I studied full-stack
            JavaScript development. My focus was on the various Node APIs
            including authentication, socket.io event driven applications, and
            front-ends written in React. Pair programming was an important part
            of this program and taught the skills to resolve complex problems
            with peers. interpret the problem and solve it in code. After being
            a student, I was fortunate to become a teaching assistant where I
            was then able to apply my understanding of JavaScript and problem
            solving to help my students tackle their own problems. Both of these
            roles allowed me to develop my technical, organizational, and
            leadership skills by working as part of a team of people from all
            sorts of backgrounds.
          </p>
          <p>
            My experience working with diverse populations, working across teams
            to develop and execute complicated plans, my love for creating
            beautiful scalable web experiences, and my eagerness to learn make
            me a great fit for this position. Thank you very much for the time
            to read over this. I invite you to look over my projects, checkout
            my resume, and shoot me an email.
            <br />
            In my spare time, I like to surf, cycle, and hang out with my wife
            and dog.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            I look forward to chatting with you soon. I can be reached via
            LinkedIn and email. Thank you for your interest!
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
