import React from "react";
import styled from "styled-components";
import ParagraphText from "../paragraphTexts/ParagraphText";
import SectionTitle from "../titles/SectionTitle";
import TeamMemberItem from "./TeamMemberItem";
// team member images
import teamMember1 from "../../assets/images/4.png";
import teamMember2 from "../../assets/images/19.jpg";
import teamMember3 from "../../assets/images/7.png";
import teamMember4 from "../../assets/images/21.jpg";
import teamMember5 from "../../assets/images/5.PNG";
import teamMember6 from "../../assets/images/16.jpg";
import teamMember7 from "../../assets/images/17.jpg";
import teamMember8 from "../../assets/images/20.jpg";
import teamMember9 from "../../assets/images/18.jpg";

const TeamSectionStyles = styled.div`
  padding: 1rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 790px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

function TeamSection() {
  return (
    <TeamSectionStyles id="twórcy">
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText className="team__subtitle">
              Przedstawiciele
            </ParagraphText>
            <SectionTitle className="team__title">Młodej Polski</SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem
              img={teamMember1}
              name="Tadeusz Boy-Żeleński"
              title="intelektualista i literat"
            />
            <TeamMemberItem
              img={teamMember2}
              name="Jan Kasprowicz"
              title="poeta, dramaturg, krytyk"
            />
            <TeamMemberItem
              img={teamMember3}
              name="Bolesław Leśmian"
              title="poeta, prozaik, krytyk"
            />
            <TeamMemberItem
              img={teamMember4}
              name="Kazimierz Przerwa-Tetmajer"
              title="poeta, nowelista, powieściopisarz"
            />
            <TeamMemberItem
              img={teamMember5}
              name="Stanisław Przybyszewski"
              title="pisarz, poeta, dramaturg"
            />
            <TeamMemberItem
              img={teamMember6}
              name="Władysław Reymont"
              title="pisarz, prozaik, nowelista"
            />
            <TeamMemberItem
              img={teamMember7}
              name="Leopold Staff"
              title="poeta, tłumacz, eseista"
            />
            <TeamMemberItem
              img={teamMember8}
              name="Stanisław Wyspiański"
              title="poeta, dramaturg, malarz, grafik"
            />
            <TeamMemberItem
              img={teamMember9}
              name="Stefan Żeromski"
              title="prozaik, publicysta, dramaturg"
            />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
