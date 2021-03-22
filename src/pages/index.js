import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

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
            <p>Check out my work below.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio and Resume</h2>
          </header>

          <p>
            Please click on the below images to be taken to their corresponding
            github repositories.
          </p>

          {/* TODO: Add padding to the titles of the cards */}
          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://github.com/Team-TDD"
                  className="image fit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <a
                    href="https://github.com/Team-TDD"
                    alt="Github Repo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>Haggle</h3>
                  </a>
                  <p>Backend CLI Based Crud application</p>
                </header>
              </article>
            </div>

            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://github.com/Chris-Bortel-401-advanced-javascript/bortel-shop"
                  alt="Link to Bortel's Shop Github Repo"
                  target="_blank"
                  rel="noreferrer"
                  className="image fit"
                >
                  <img src={pic3} alt="bortel-shop.jpg" />
                </a>
                <header>
                  {/* TODO: add: fullstack crud application --> Add button for a module */}
                  <a
                    href="https://github.com/Chris-Bortel-401-advanced-javascript/bortel-shop"
                    alt="Github Repo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>Bortel Shop</h3>
                  </a>
                  <p>Fullstack Crud Application</p>
                </header>
              </article>
            </div>

            {/* TODO: add picture and like of my resume */}
            {/* <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://github.com/301-MRCD/301-final-project"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Resume</h3>
                </header>
              </article>
            </div> */}
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
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
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>

          <form method="post" action="#">
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
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
