import FooterSection from './FooterSection';
import FromPilotToPerformanceSection from './FromPilotToPerformanceSection';
import AELDiagram from './AELDiagram';
import SolutionsStrategySection from './SolutionsStrategySection';
import SolutionsFirst from './SolutionsFirst';

export default function Solutions() {
  return (
    <div className="font-montserrat">
      <section className="bg-black">
        <SolutionsFirst />
      </section>
      <section className="bg-black">
        <SolutionsStrategySection />
      </section>
      <section className="bg-black">
        <AELDiagram />
      </section>
      <section className="bg-black">
        <FromPilotToPerformanceSection />
      </section>
      <section className="bg-black">
        <FooterSection />
      </section>
      
    </div>
  );
}