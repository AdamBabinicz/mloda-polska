import React, { useState } from "react";
import HeroTitle from "../components/titles/HeroTitle";
import styled from "styled-components";
import ParagraphText from "./paragraphTexts/ParagraphText";
import PrimaryButton from "./buttons/PrimaryButton";
import HeroImg from "../assets/images/6.jpg";
import { Link } from "react-scroll";
import Modal from "../components/Portal/Modal";

const HeroSectionStyles = styled.div`
  padding-top: calc(var(--header-height) + 10px);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .hero__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .hero__info {
    flex: 3;
  }
  .hero__img {
    flex: 4;

    img {
      object-fit: contain;
    }
  }
  .hero__title {
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
  .hero__desc {
    margin-bottom: 1.5rem;
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
    .hero__img {
      display: flex;
      justify-content: flex-end;
      img {
        max-width: 400px;
        margin-top: auto;
      }
    }
  }
`;

function HeroSection() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <HeroSectionStyles id="start">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__info">
            <HeroTitle className="hero__title">Młoda Polska</HeroTitle>
            <ParagraphText className="hero__desc">
              w Europie nazywana raczej <b>modernizmem</b>,
              <b> dekadentyzmem </b>
              czy <b>symbolizmem</b>, nie jest tylko kolejną epoką literacką w
              dziejach polskiej kultury.
            </ParagraphText>
            <PrimaryButton buttonType={Link} smooth onClick={() => Toggle()}>
              Więcej
            </PrimaryButton>
            <Modal show={modal} close={Toggle} title="Młoda Polska">
              <p>
                Artyści młodopolscy przenieśli do Polski nowości sztuki
                europejskiej: impresjonizm, symbolizm, secesję. Jednocześnie
                chcieli tworzyć sztukę narodową, więc odwoływali się do
                polskiego romantyzmu i sztuki ludowej. Młoda Polska to czas
                działania wybitnych twórców uprawiających z powodzeniem bardzo
                różnorodne dziedziny sztuki: malarstwo sztalugowe, malarstwo
                monumentalne (dekoracje wnętrz kościołów i gmachów użyteczności
                publicznej), rzeźbę, rzemiosło artystyczne, grafikę.
                Najważniejszym ośrodkiem Młodej Polski był Kraków.
              </p>
              <br />
              <p>
                <em>//zacheta.art.pl/pl/mediateka-i-publikacje/mloda-polska</em>
              </p>
            </Modal>
          </div>
          <div className="hero__img">
            <img src={HeroImg} alt="..." />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
