import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/MomentsSection.css';

import Video1 from '../../../assets/Videos/dsp/video11.mp4';
import Video2 from '../../../assets/Videos/dsp/video12.mp4';
import Video3 from '../../../assets/Videos/dsp/video13.mp4';

const MomentsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [rowsRef, isRowsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

  const moments = [
    {
      video: Video1,
      title: 'Story choice paths → intent classification',
    },
    {
      video: Video2,
      title: 'Explicit preference & consideration signals',
    },
    {
      video: Video3,
      title: 'Real-time engagement + outcome signals',
    },
  ];

  return (
    <section ref={sectionRef} className={`dsp-moments-section fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="dsp-moments-container">
        <h2 className="dsp-moments-title">Interaction Signals DSPs Can Finally Optimize On</h2>

        <div
          ref={rowsRef}
          className={`dsp-moments-rows slide-in-up ${isRowsVisible ? 'visible' : ''}`}
        >
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className={`dsp-moment-row ${index % 2 === 1 ? 'dsp-reverse' : ''}`}
            >
              <div className="dsp-moment-image-wrapper">
                <video
                  src={moment.video}
                  className="dsp-moment-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="dsp-moment-text-wrapper">
                <p className={`dsp-moment-text dsp-moment-text-${index + 1}`}>{moment.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;

