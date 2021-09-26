import styled from "styled-components";

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p> NextJS 2021 &copy; All Rights Reserved. </p>
    </FooterSection>
  );
};

export default Footer;
