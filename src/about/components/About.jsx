import styled from "styled-components";
import Pic from "../../images/about-banner.jpg";
const AboutContainer = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1440px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.2);
  margin-top: -60px;
  margin-bottom: 0px;
  padding: 15px 15px 15px 15px;
  background-color: white;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const AboutContent = styled.div`
  flex: 1;
  height: 100%;
  p {
    line-height: 26px;
  }
`;

const PicWrapper = styled.div`
  flex: 1;
  height: 270px;
  width: 100%;
  @media (max-width: 768px) {
    height: 200px;
  }
`;
const PicImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const About = () => {
  return (
    <>
      <AboutContainer>
        <PicWrapper>
          <a href="https://fr.freepik.com/photos-gratuite/vue-appareil-informatique-3d-peripheriques_60907779.htm#fromView=search&page=1&position=17&uuid=f3dad4e7-55ce-4800-ad59-febce285fc35">
            <PicImage src={Pic} alt="" />
          </a>{" "}
        </PicWrapper>

        <AboutContent>
          <AboutTitle>À Propos de Moi</AboutTitle>

          <p>
            Passionné par le développement web et le design UI, j'ai acquis une
            solide expertise grâce à un Master en Anglais et une formation en
            Concepteur Designer UI. Je suis également formé en Développement
            web. Convaincu de pouvoir apporter une valeur ajoutée, je suis
            également actif dans des activités musicales et associatives.
            N'hésitez pas à me contacter.
          </p>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default About;
