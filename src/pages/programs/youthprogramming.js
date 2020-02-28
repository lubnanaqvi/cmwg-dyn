import React from "react"
import styled from "styled-components"
import Hero from "../../components/utils/Hero"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StyledHeading from "../../components/utils/StyledHeading"
import TiledDiv from "../../components/utils/TiledDiv"
import Styled80Div from "../../components/utils/Styled80Div"
import NavPanel from "../../components/programpagecomponents/NavPanel"
import programpages from "../../json/programs.json"

const Youthprogramming = () => {
  const StyledImg = styled.img`
    float: right;
    width: 20%;
    max-width: 500px;
    margin: 1%;
    @media (max-width: 750px) {
      float: none;
      display: block;
      width: 70%;
      margin: auto;
    }
  `
  const StyledPara = styled.p`
    line-height: 1.4em;
  `
  return (
    <Layout>
      <SEO title="Programs - Youth Programming" />
      <TiledDiv>
        <Hero heroID={1} />
        <Styled80Div>
          <NavPanel items={programpages} />
          <StyledHeading t="Youth Programming" />
          <StyledImg
            src={require("../../images/youthprogramming.jpg")}
            alt="Youth Programming event photo"
          />
          <StyledPara>
            The Safe Spaces Initiative aims to help young Muslims realize their
            potential by empowering them through providing a comfortable space
            where they can grow spiritually, personally, and mentally. Young
            people often feel torn balancing their identities, especially
            considering today’s increasingly hostile climate. Through a mentor
            led program, we will provide Muslim youth with a culturally
            sensitive, inclusive, and open space where dialogue around concerns,
            current issues, and other topics can be fostered. Topics such as
            leadership, empowerment, and more, will be addressed through open
            discussion, workshops, and various initiatives. The Safe Spaces
            Initiative seeks to build a judgement-free community for young
            people. The program also will integrate a social component to
            connect and meet others. The Safe Spaces Initiative hopes to be an
            outlet for youth where they can be provided with the tools to
            flourish as their best selves.
          </StyledPara>
          <StyledPara>
            Please contact Sarah Shafiq at sarah.shafiq or 519-576-0540 ext.
            3563 for more information on the The Safe Space Initiative.
          </StyledPara>
        </Styled80Div>
      </TiledDiv>
    </Layout>
  )
}
export default Youthprogramming
