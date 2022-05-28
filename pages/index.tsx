import type { NextPage } from 'next'
import {useEffect} from "react";
import  ScrollTrigger  from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import  MotionPathPlugin  from "gsap/dist/MotionPathPlugin";
import SectionOne from './components/sectionOne';
import SectionTwo from './components/sectionTwo';
import SectionThree from './components/sectionThree';
import SectionFour from './components/sectionFour';
import Header from './components/header';


function initFunction(){
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  let speed = 100;
  let circle_base = gsap.timeline({ paused: true, reversed: true });
  ScrollTrigger.create({
    animation: circle_base,
    trigger: ".section-1",
    start: "top top",
    end: "200% top",
    scrub: 3,
    markers: false,
    pin: true
  });

  circle_base.from(
    ".circle",
    {
      scale: 5,
      x: "100%",
      transformOrigin: "center",
      opacity: 1
    },
    0
  );

  circle_base.to(
    ".laptop-1",
    {
      x: 0,
      y: -30,
      transformOrigin: "center",
      opacity: 0
    },
    0
  );
  circle_base.to(
    ".laptop-2",
    {
      x: 0,
      y: -30,
      transformOrigin: "center",
      opacity: 0
    },
    0.1
  );
  circle_base.to(
    ".laptop-3",
    {
      x: 0,
      y: -30,
      transformOrigin: "center",
      opacity: 0
    },
    0.2
  );
  circle_base.to(
    ".cable",
    {
      opacity: 0
    },
    0.3
  );

  circle_base.to(
    ".transfer",
    {
      strokeDashoffset: 200,
      transformOrigin: "center",
      opacity: 0
    },
    0.4
  );
  circle_base.to(
    ".server-top",
    {
      y: -50,
      transformOrigin: "center",
      opacity: 0
    },
    0.5
  );
  circle_base.to(
    ".server-base",
    {
      y: -50,
      transformOrigin: "center",
      opacity: 0
    },
    0.6
  );
  circle_base.to(
    ".shadow",
    {
      scale: 0,
      transformOrigin: "center",
      opacity: 0
    },
    0.6
  );
  circle_base.to(
    ".main-cloud",
    {
      y: 0,
      transformOrigin: "center",
      opacity: 0
    },
    0.7
  );

  circle_base.to(
    ".circles",
    {
      scale: 5,
      transformOrigin: "center",
      opacity: 0,
      duration: 2
    },
    1
  );

  let chain = gsap.timeline({ paused: true, reversed: true });
  ScrollTrigger.create({
    animation: chain,
    trigger: ".section-2",
    start: "center center",
    end: "200% center",
    scrub: 1,
    markers: false,
    pin: true
  });

  chain.from(".circle-grp", {
    scale: 5,
    transformOrigin: "center",
    opacity: 0
  });

  chain.to(
    ".polygon-logo",
    {
      scale: 0.5,
      duration: 15,
      ease: "none",
      motionPath: {
        path: ".travel",
        align: ".travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    0
  );

  chain.to(
    ".Avalanche-logo",
    {
      scale: 0.5,
      duration: 15,
      ease: "none",
      motionPath: {
        path: ".travel",
        align: ".travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    0.56
  );

  chain.to(
    ".Fantom-logo",
    {
      scale: 0.5,
      duration: 15,
      ease: "none",
      motionPath: {
        path: ".travel",
        align: ".travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    1.13
  );

  chain.to(
    ".Solana-logo",
    {
      scale: 0.5,
      duration: 15,
      ease: "none",
      motionPath: {
        path: ".travel",
        align: ".travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    1.7
  );

  chain.to(
    ".near-logo",
    {
      scale: 0.5,
      duration: 15,
      ease: "none",
      motionPath: {
        path: ".travel",
        align: ".travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    2.26
  );

  chain.to(
    ".Optimism-logo",
    {
      scale: 0.5,
      duration: 15,
      ease: "none",
      motionPath: {
        path: ".travel",
        align: ".travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    2.83
  );

  chain.to(
    ".Arbitrum-logo",
    {
      scale: 0.5,
      duration: 15,
      ease: "none",
      motionPath: {
        path: ".travel",
        align: ".travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    3.4
  );

  let token = gsap.timeline({ paused: true, reversed: true });
  ScrollTrigger.create({
    animation: token,
    trigger: ".section-3",
    start: "center center",
    end: "200% center",
    scrub: 1,
    markers: false,
    pin: true
  });
  token.from(
    "#spheron-token",
    {
      scale: 1,
      duration: 5,
      ease: "none",
      motionPath: {
        path: "#spheron-travel",
        align: "#spheron-travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    0
  );

  token.from(
    "#btc-token",
    {
      scale: 1,
      duration: 5,
      ease: "none",
      motionPath: {
        path: "#btc-travel",
        align: "#btc-travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    0
  );

  token.from(
    "#eth-token",
    {
      scale: 1,
      duration: 5,
      ease: "none",
      motionPath: {
        path: "#eth-travel",
        align: "#eth-travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    0
  );

  token.from(
    "#usdc-token",
    {
      scale: 1,
      duration: 5,
      ease: "none",
      motionPath: {
        path: "#usdc-travel",
        align: "#usdc-travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    0
  );

  token.from(
    "#tether-token",
    {
      scale: 1,
      duration: 5,
      ease: "none",
      motionPath: {
        path: "#usdt-travel",
        align: "#usdt-travel",
        autoRotate: false,
        alignOrigin: [0.5, 1]
      }
    },
    0
  );

  token.to(
    ".sec3-content",
    {
      y: -50,
      opacity: 0,
      duration: 5
    },
    5
  );

  token.to(
    ".sec4-content",
    {
      y: -220,
      opacity: 1,
      duration: 5
    },
    5.2
  );

  token.to(
    ".sec3",
    {
      scale: 2,
      y: -150,
      duration: 5
    },
    5.2
  );

  token.to(
    "#spheron-token",
    {
      scale: 0.5,
      duration: 5
    },
    5.2
  );

  token.to(
    "#btc-token",
    {
      scale: 0.5,
      duration: 5
    },
    5.2
  );

  token.to(
    "#eth-token",
    {
      scale: 0.5,
      duration: 5
    },
    5.2
  );

  token.to(
    "#usdc-token",
    {
      scale: 0.5,
      duration: 5
    },
    5.2
  );

  token.to(
    "#tether-token",
    {
      scale: 0.5,
      duration: 5
    },
    5.2
  );

  token.to(
    ".outer-rings",
    {
      opacity: 0,
      duration: 5
    },
    5.2
  );

  token.to(
    ".connector-lines",
    {
      opacity: 0,
      duration: 5
    },
    5.2
  );

  token.to(
    "#polygon-logo",
    {
      y: -50,
      opacity: 0,
      duration: 5
    },
    4.6
  );

  token.to(
    "#fantom-logo",
    {
      y: -50,
      opacity: 0,
      duration: 5
    },
    4.7
  );

  token.to(
    "#avalanche-logo",
    {
      y: -50,
      opacity: 0,
      duration: 5
    },
    4.8
  );

  token.to(
    "#solana-logo",
    {
      y: -50,
      opacity: 0,
      duration: 5
    },
    4.9
  );

  token.to(
    "#near-logo",
    {
      y: -50,
      opacity: 0,
      duration: 5
    },
    5.0
  );

  token.to(
    "#optimism-logo",
    {
      y: -50,
      opacity: 0,
      duration: 5
    },
    5.1
  );

  token.to(
    "#arbitrum-logo",
    {
      y: -50,
      opacity: 0,
      duration: 5
    },
    5.2
  );

  token.to(
    "#upload-svg",
    {
      opacity: 1,
      duration: 5
    },
    5.2
  );
}

const Home: NextPage = () => {

  useEffect(() => {
    initFunction();
  }, [])
  
  return (
      <>
        <Header />
        <section className="container">
         <SectionOne />
         <SectionTwo />
         <SectionThree />
         <SectionFour />
        </section>
      </>
    );
}

export default Home
