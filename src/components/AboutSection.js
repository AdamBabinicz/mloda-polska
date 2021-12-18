import React, { useState } from "react";
import AboutImg from "../assets/images/3.png";
import ParagraphText from "./paragraphTexts/ParagraphText";
import SectionTitle from "./titles/SectionTitle";
import PrimaryButton from "./buttons/PrimaryButton";
import { Link } from "react-scroll";
import styled from "styled-components";
import Modal from "../components/Portal/Modal";

const AboutStyles = styled.div`
  padding: 1rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 350px;
  }
  .about__desc {
    margin-bottom: 2rem;
    max-width: 700px;
    font-size: 1.6rem;
    line-height: 1.7;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__img {
      max-width: 400px;
    }
    .about__desc {
      font-size: 1.4rem;
    }
  }
`;

function AboutSection() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <AboutStyles id="idea">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img">
            <img src={AboutImg} alt="..." />
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">
              Polska odmiana modernizmu w literaturze, muzyce i sztuce polskiej
              przypadającego na lata 1890–1918.
            </ParagraphText>
            <SectionTitle className="about__title">
              Idea Młodej Polski
            </SectionTitle>
            <ParagraphText className="about__desc">
              Młoda Polska to okres w historii literatury i sztuki przypadający
              na czas twórczości dwóch pokoleń – pisarzy urodzonych w latach 60.
              i 70. XIX wieku. Rozwijała się jako odpowiedź na sytuację ideową,
              filozoficzną, polityczną i artystyczną końca wieku, którą
              młodopolanie oceniali negatywnie. <br />
              <br />
              Na powszechne nastroje zagrożenia, bezsilności i dekadencką
              postawę wielu twórców wpłynęło dodatkowo załamanie się machiny
              kapitalizmu i monarchii, zauważalne w wielu państwach europejskich
              – do głosu coraz częściej zaczęły dochodzić idee socjalistów.
              Przedstawiciele Młodej Polski obawiali się również, że działania
              władców imperialistycznych państw świata mogą doprowadzić
              cywilizację na skraj zagłady. Wszystko to sprawiło, że młodopolscy
              artyści nie ufali – w przeciwieństwie do pokolenia swych ojców
              spod znaku pozytywizmu – staremu porządkowi świata. <br />
              <br />
              Główną inspirację przedstawiciele nowej epoki czerpali z filozofii
              Schopenhauera, Nietzschego i Bergsona – myślicieli, głoszących
              m.in. powinność czy wręcz obowiązek powszechnego
              „przewartościowania wartości”. Często w utworach młodopolskich
              artystów zauważyć można również wpływy immoralizmu i odmiennego
              niż klasyczne spojrzenia na estetykę. W latach 1900–1905 nastąpiły
              przemiany artystyczne i filozoficzne. Bunt modernistyczny i
              pesymizm zaczęły być wtórne. Leopold Staff ogłosił program poezji
              aktywnej i optymistycznej. Popularna stała się postać św.
              Franciszka z Asyżu. Nawet u najwybitniejszych nastąpiło
              odstąpienie od nastrojowości i nasilenie środków ekspresji.
            </ParagraphText>
            <PrimaryButton buttonType={Link} smooth onClick={() => Toggle()}>
              Czytaj
            </PrimaryButton>
            <Modal show={modal} close={Toggle} title="Młoda Polska">
              <p>
                Jest to epoka, która trwała od ostatniego dziesięciolecia XIX w.
                do końca I wojny światowej. Nazwa została zaczerpnięta od
                ukazującego się w 1898 r. w krakowskim „Życiu” cyklu artykułów
                Artura Górskiego zatytułowanego właśnie Młoda Polska (niemal w
                całej Europie podobne ruchy artystyczno-ideowe nazywały się
                analogicznie, np. Młode Niemcy). Inna nazwa epoki to modernizm
                (fr. moderne – ‘nowoczesny’), neoromantyzm, dekadentyzm (fr.
                décadence – ‘schyłek, upadek’), fin de siécle (‘koniec wieku’).
              </p>
              <p>
                W Młodej Polsce dominowały nastroje pesymistyczne, pojawił się
                kryzys końca wieku, poczucie znużenia i zagrożenia, odrzucenie
                wartości, niechęć do cywilizacji. Ważną rolę odgrywała także
                działalność artystyczna.
              </p>
              <br />
              <p>
                <em>//polszczyzna.pl/mloda-polska-epoki-literackie</em>
              </p>
            </Modal>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
