import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/SolutionSection.css';

// Import non-dark logo images
import FastAd from '../../../assets/landing/fastad.svg';
import Cpm from '../../../assets/landing/cpm.svg';
import High from '../../../assets/landing/high.svg';
import Sku from '../../../assets/landing/sku.svg';

const SolutionSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [descriptionRef, isDescriptionVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [cardsRef, isCardsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    const solutions = [
        {
            icon: Cpm,
            text: "+20-50% CPM uplift"
        },
        {
            icon: Sku,
            text: "Net-new premium interactive SKUs"
        },
        {
            icon: High,
            text: 'Higher watch time through opt-in interaction paths'
        },
        {
            icon: FastAd,
            text: "Faster ad format testing — no redeploys"
        }
    ];

    return (
        <section ref={sectionRef} className={`solution-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="solution-container">
                {/* Section Title */}
                <h2 ref={titleRef} className={`solution-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    SOLUTION - THE CANVAS EDGE
                </h2>

                {/* Section Description */}
                <p ref={descriptionRef} className={`solution-description fade-in-section ${isDescriptionVisible ? 'visible' : ''}`}>
                    Canvas runs as a lightweight runtime inside your player. It enables in-session interactive ad moments. <br />No SSAI. No encoding changes.

                </p>

                {/* Solution Cards */}
                <div ref={cardsRef} className={`solution-cards-container scale-in ${isCardsVisible ? 'visible' : ''}`}>
                    {solutions.map((solution, index) => (
                        <div key={index} className={`solution-card solution-card-${index + 1}`}>
                            <div className="solution-card-content">
                                <div className="solution-icon">
                                    <img src={solution.icon} alt={solution.text} />
                                </div>
                                <div className={`solution-text-container ${index === 0 ? 'solution-text-container-first' : ''}`}>
                                    <p className="solution-card-text">
                                        {solution.text}
                                    </p>
                                    {index === 0 && (
                                        <p className="solution-card-footnote">
                                            Observed across live CTV campaigns
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;

