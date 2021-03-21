import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
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
              Hi! I'm <strong>Chris</strong>
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
            <h2>Portfolio</h2>
          </header>

          <p>
            An educator pursuing a career in software development to positively
            affect a larger group of people, while focusing on the importance of
            family and community
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://github.com/Team-TDD"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Haggle</h3>
                </header>
              </article>
            </div>

            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="" className="image fit">
                  <img src={pic3} alt="bortel-shop.jpg" />
                </a>
                <header>
                  <h3>Bortel Shop</h3>
                </header>
              </article>
            </div>

            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://github.com/301-MRCD/301-final-project"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Dog Park App</h3>
                </header>
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
            <img src={pic8} alt="" />
          </a>
          {/* TODO: Needs revisions, I really dislike the way that the text is justified*/}
          <p>
            My name is Chris Bortel and I am a software developer based in
            Seattle. Previously, I worked in special education and most recently
            managed a classroom and curriculum of ten students. - This
            experience gave me a love of creating something from the ground up.
            - Leading a group of students was hard work, but being able to look
            back and see how much growth I enabled was so rewarding. - I helped
            build something really special. - I have a desire to build things
            that are special and provide a meaningful service. This led me to
            software development. - a path that allows me to continue learning
            and problem solving. - I am excited to pair my past experiences
            working in education to build intuitive software and in doing so
            continue providing positive outcomes to all people that I have the
            pleasure of working for and with.
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
