import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const AboutContent = styled.div`
  p {
    margin-bottom: 20px;
  }
`;

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutTitle>À Propos de Moi</AboutTitle>
        <AboutContent>
          <p>
            En reconversion professionnelle après 16 ans dans l'armée, je suis
            aujourd'hui Concepteur Designer UI et développeur web passionné par
            le front-end
          </p>
          <p>
            J'ai acquis des compétences solides en HTML, CSS, JavaScript, Figma
            et Photoshop. En tant que personne responsable, fiable, impliquée et
            optimiste, je suis convaincu que je peux apporter une valeur ajoutée
            à votre entreprise.
          </p>
          <p>
            Je suis également musicien guitariste et je suis engagé dans
            l'association CAAA Cœur de Ville à Toulon en tant que membre du
            conseil d'administration et bénévole.
          </p>
          <p>
            Si vous avez des questions ou si vous souhaitez me contacter,
            n'hésitez pas à me contacter
          </p>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default About;
