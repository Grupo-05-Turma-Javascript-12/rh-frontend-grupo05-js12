import Cta from "./cta/Cta";
import Faq from "./faq/Faq";
import Hero from "./hero/Hero";
import SobreEmpresa from "./sobreEmpresa/SobreEmpresa";
import Valores from "./valores/Valores";

function Home() {
  return (
    <div>
      <Hero />
      <SobreEmpresa />
      <Valores />
      <Faq />
      <Cta />
    </div>
  );
}

export default Home;
