import React from "react";
import Section from "elements/Section";
import Header from "parts/Header";
import HerroImg from "assets/images/hero-image.png";
import Fade from "react-reveal/Fade";
import Clients from "parts/Clients";
import Feature from "parts/Feature";

import FeatureTile1 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile2 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile3 from "assets/images/feature-tile-icon-03.svg";

export default function Homepage() {
  const features = [
    {
      imgSrc: FeatureTile1,
      imgAlt: "Feature tile icon 01",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in webdesign, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile2,
      imgAlt: "Feature tile icon 02",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in webdesign, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile3,
      imgAlt: "Feature tile icon 03",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in webdesign, layout, and printing in place of things to emphasise design.",
    },
  ];

  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade bottom>
                  <img
                    className="has-shadow"
                    src={HerroImg}
                    alt="Hero image"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients></Clients>
        <Section className="features-tiles">
          <div class="container">
            <div class="features-tiles-inner section-inner">
              <div class="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMS={index * 150}
                    data={feature}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
