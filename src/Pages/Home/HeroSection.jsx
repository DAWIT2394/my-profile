import im1 from './Homescreen/images/d1.jpg';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dave</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          software engineer who possesses expertise in both front-end and back-end development,
            <br />  enabling them to work on all aspects of web application development. Here's a detailed description of the role
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={im1} alt="Hero Section" />
      </div>
    </section>
  );
}
