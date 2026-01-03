import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/MomentsSection.css';

import Video1 from '../../../assets/Videos/publisher/video21.mp4';
import Video2 from '../../../assets/Videos/publisher/video22.mp4';
import Video3 from '../../../assets/Videos/publisher/video23.mp4';

const MomentsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [rowsRef, isRowsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

  const moments = [
    {
      video: Video1,
      title: 'Live across leading CTV & FAST environments',
      descriptor: 'Capture real-time intent during playback',
    },
    {
      video: Video2,
      title: 'Opt-in reward moments',
      descriptor: 'Exchange value for attention in-session',
    },
    {
      video: Video3,
      title: 'Interactive choice-based ads',
      descriptor: 'Let viewers choose. Log intent instantly.',
    },
  ];

  return (
    <section ref={sectionRef} className={`moments-section fade-in-section ${isVisible ? 'visible' : ''}`}>
      <div className="moments-container">
        <h2 className="moments-title">HIGH-IMPACT MOMENTS THAT CANVAS UNLOCKS</h2>

        <div
          ref={rowsRef}
          className={`moments-rows slide-in-up ${isRowsVisible ? 'visible' : ''}`}
        >
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className={`moment-row ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="moment-image-wrapper">
                <video
                  src={moment.video}
                  className="moment-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className={`moment-text-wrapper ${index === 0 ? 'moment-text-wrapper-first' : ''}`}>
                <div className="moment-text-container">
                  <p className={`moment-text ${index === 0 ? 'moment-text-first' : ''}`}>{moment.title}</p>
                  <p className={`moment-descriptor ${index === 0 ? 'moment-descriptor-first' : ''}`}>{moment.descriptor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;

