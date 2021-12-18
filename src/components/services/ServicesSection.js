import React from "react";
import styled from "styled-components";
import {
  GiAbstract034,
  GiAbstract027,
  GiAbstract065,
  GiAbstract057,
  GiAbstract070,
} from "react-icons/gi";
import SectionTitle from "../titles/SectionTitle";
import ServiceItem from "./ServiceItem";

const ServicesSectionStyles = styled.div`
  padding: 5rem 0;
  text-align: center;
  margin-bottom: 2rem;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0;
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="tendencje">
      <div className="container">
        <SectionTitle classname="services__title">
          Tendencje w literaturze
        </SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<GiAbstract034 />}
            title="Neoromantyzm"
            desc="Kierunek określający tendencje znamienne dla modernizmu; indywidualizm i mistycyzm w ideologii oraz symbolizm jako środek ekspresji pisarskiej."
          ></ServiceItem>
          <ServiceItem
            icon={<GiAbstract027 />}
            title="Symbolizm"
            desc="Symbolizm – kierunek w poezji i sztukach plastycznych, powstały we Francji i Belgii w drugiej połowie XIX wieku, zakładał, że świat poznawany zmysłami (materialny) jest złudą skrywającą prawdziwy, idealny świat, którego zmysłami i rozumem nie można zinterpretować. Pojęć ze świata prawdziwego nie da się opisać za pomocą zwykłego języka, może to zrobić tylko symbol."
          ></ServiceItem>
          <ServiceItem
            icon={<GiAbstract065 />}
            title="Ekspresjonizm"
            desc="Ekspresjonizm – awangardowy prąd literacki, który pojawił się około 1910 roku w Niemczech i trwał do końca lat 20. XX wieku. Miał liczne odpowiedniki w literaturach narodowych Europy, ale nigdzie nie uzyskał takiego stopnia zaawansowania jak na niemieckim obszarze językowym."
          ></ServiceItem>
          <ServiceItem
            icon={<GiAbstract057 />}
            title="Naturalizm"
            desc="Naturalizm – metoda w literaturze i sztuce zmierzająca do wiernego, niemal fotograficznego naśladownictwa natury, mająca na celu ukazanie jej w pierwszej fazie rozwoju. Powstała we Francji w drugiej połowie XIX wieku."
          ></ServiceItem>
          <ServiceItem
            icon={<GiAbstract070 />}
            title="Impresjonizm"
            desc="Impresjonizm w literaturze – inspirowany dokonaniami malarstwa impresjonistycznego, kierunek w literaturze, narodzony w drugiej połowie XIX wieku we Francji i rozpowszechniony do początku wieku XX."
          ></ServiceItem>
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
