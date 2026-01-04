import useScrollAnimation from '../../../hooks/useScrollAnimation';
import CTAButton from '../../../components/CTAButton';
import '../styles/PricingSection.css';

// Import pricing logos and editor image
import RevShare from '../../../assets/landing/revshare.svg';
import Fee from '../../../assets/landing/fee.svg';
import Cpm from '../../../assets/landing/sku.svg';
import EditorVideo from '../../../assets/landing/editor.mp4';

const PricingSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [leftRef, isLeftVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [rightRef, isRightVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    const pricingModels = [
        {
            icon: RevShare,
            text: "Platform / OEM license"
        },
        {
            icon: Cpm,
            text: "Per-customer enablement"
        },
        {
            icon: Fee,
            text: "Per-interaction monetization"
        }
    ];

    return (
        <section ref={sectionRef} className={`pricing-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="pricing-container">
                <h2 className="pricing-title">INFRASTRUCTURE COMMERCIAL MODELS</h2>

                <div className="pricing-content">
                    {/* Left Column - Pricing Cards */}
                    <div ref={leftRef} className={`pricing-left slide-in-left ${isLeftVisible ? 'visible' : ''}`}>
                        <div className="pricing-cards">
                            {pricingModels.map((model, index) => (
                                <div key={index} className={`pricing-card pricing-card-${index + 1}`}>
                                    <div className="pricing-card-content">
                                        <div className="pricing-icon">
                                            <img src={model.icon} alt={model.text} />
                                        </div>
                                        <div className="pricing-divider"></div>
                                        <p className="pricing-card-text">{model.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Editor Image */}
                    <div ref={rightRef} className={`pricing-right slide-in-right ${isRightVisible ? 'visible' : ''}`}>
                        <div className="pricing-image-wrapper">
                            <video src={EditorVideo} autoPlay loop muted playsInline className="pricing-editor-image" />
                        </div>
                    </div>
                </div>

                {/* CTA Button - Centered between columns */}
                <div className="pricing-cta-container">
                    <CTAButton name="Request demo" />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

