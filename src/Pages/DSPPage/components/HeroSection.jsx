import EllipseBackground from '../../LandingPage/assets/hero-section/Ellipse 809.svg';
import HeroVideo from '../../../assets/Videos/dsp/video10.mp4';
import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [textRef, isTextVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
  const [imageRef, isImageVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });


  return (
    <section ref={sectionRef} className={`hero-section fade-in-section ${isVisible ? 'visible' : ''}`}>
      {/* Ellipse background */}
      <div className="hero-background">
        <img src={EllipseBackground} alt="" className="hero-ellipse" />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div ref={textRef} className={`hero-text slide-in-left ${isTextVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">
            A New Interaction Signal Layer for CTV<br/>
            Built for DSPs to Optimize Beyond Impressions and CPMs
            </h1>
            <p className="hero-description">
            Capture in-session intent signals.<br />Optimize with real interaction, not assumptions
            </p>
            <div className="hero-cta-container">
              <CTAButton
                name='Request Demo'
              />
            </div>
          </div>
          <div ref={imageRef} className={`hero-image slide-in-right ${isImageVisible ? 'visible' : ''}`}>
            <video
              src={HeroVideo}
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

