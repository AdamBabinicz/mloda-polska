import React from "react";
import styled from "styled-components";
import themeList from "../../data/themeList";
import ParagraphText from "../paragraphTexts/ParagraphText";

const TeamMemberItemStyles = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
    img {
      border-radius: 18px;
      object-fit: cover;
      height: 375px;
      width: 250px;
    }
  }
  .teamMember__name {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "var(--darkBlue_2)" : "var(--lightBlue_1)"};
  }
  @media only screen and (max-width: 768px) {
    padding: 1rem 0;
    .teamMember__img {
      margin-bottom: 1rem;
      img {
        width: 300px;
        max-height: 360px;
      }
    }

    @media only screen and (max-width: 480px) {
      img {
        width: 250px;
      }
    }
  }
`;

function TeamMemberItem({ img, name, title }) {
  return (
    <TeamMemberItemStyles>
      <div className="teamMember__img">
        <img src={img} alt="..." />
      </div>
      <ParagraphText className="teamMember__name">{name}</ParagraphText>
      <ParagraphText className="teamMember__subtitle">{title}</ParagraphText>
    </TeamMemberItemStyles>
  );
}

export default TeamMemberItem;
