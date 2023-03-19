import React from 'react';
import stule from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={stule.aboutUs}>
      <div className={stule.aboutUsHeader}>
        <h1>About Us</h1>
      </div>
      <div className={stule.aboutUsContent}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum justo massa, eget
          lacinia leo ullamcorper non. Fusce sit amet neque in sapien accumsan vehicula. Integer
          ultricies, nisi ut fermentum bibendum, turpis velit feugiat massa, in congue elit quam id
          nulla. Nulla ac vestibulum purus. Sed bibendum dolor nec sem laoreet pharetra.
        </p>
        <p>
          Vestibulum vel orci ac purus eleifend lobortis. Donec ut ultrices nunc, in dignissim ex.
          Quisque vel sem ac massa euismod aliquam nec sed velit. Nulla facilisi. Nulla fermentum,
          sapien id egestas maximus, turpis sapien faucibus orci, id varius velit velit ac velit.
        </p>
        <p>
          Sed bibendum dolor nec sem laoreet pharetra. Vestibulum vel orci ac purus eleifend
          lobortis. Donec ut ultrices nunc, in dignissim ex. Quisque vel sem ac massa euismod
          aliquam nec sed velit. Nulla facilisi.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
