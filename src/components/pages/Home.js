import React from 'react';
import './styles/Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div id="home" className="header-container">
      <div className="header-contents">
        <h2>Hi, I'm Natski, </h2>
        <h1>
          <Typewriter
            options={{
              strings: [
                'FRONT-END WEB DEVELOPER',
                'React | React Native',
                'DESIGNER',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Home;
