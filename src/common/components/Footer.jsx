import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #292929;
  color: #fff;
  padding: 20px 0;
  z-index: 1001;
  width: 100vw;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 20px;
 
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: white;
  margin-top: 10px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 10px 20px;
  font-size: 30px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;
const Links_wrapper = styled.div`

`

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyright = `© ${currentYear} Billel KHANFRI`;

  return (
    <FooterWrapper>
      <Paragraph>Connectez-vous avec moi :</Paragraph>
      <Links_wrapper> 
      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </Link>
      <Link
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </Link>
      <Link href="mailto:khanfri.billel@yahoo.fr">
        <FiMail />
        </Link>
        </Links_wrapper>
      <Paragraph>{copyright}</Paragraph>
    </FooterWrapper>
  );
};

export default Footer;
