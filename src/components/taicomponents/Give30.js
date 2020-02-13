import React from "react"
import styled from "styled-components"
import StyledHeading from "../utils/StyledHeading"
const Give30 = ({ id }) => {
  const StyledDiv = styled.div`
    margin: 5% 0;
  `
  const ColouredDiv = styled.div`
    background-color: #531d35;
    color: white;
    padding: 1%;
  `
  const StyledSpan = styled.span`
    padding: 0;
    margin: 0;
    font-size: 1.6em;
    text-decoration: underline;
  `
  const StyledPara = styled.p`
    margin: 0 0 3% 0;
    padding: 0;
    line-height: 1.4em;
    @media (max-width: 750px) {
      margin-bottom: 5%;
    }
  `
  const StyledAnchor = styled.a`
    color: #531d35;
    margin: 0 1%;
    font-weight: bolder;
    &:hover {
      font-style: italic;
    }
  `
  return (
    <StyledDiv id={id}>
      <StyledHeading t="Building Bridges Through Community Service" />
      <StyledSpan>Give30 Waterloo Region</StyledSpan>
      <StyledPara>
        Despite prosperity in our society, hunger is a reality for many of our
        neighbours. Food banks across Canada receive hundreds of thousands of
        visits each month, and more than one third of food bank clients are
        children.
      </StyledPara>
      <ColouredDiv>
        Give30 is a nation-wide Ramadan initiative in which everyone is
        requested to give $30 during Ramadan. The ask is to save the money one
        would have spent on coffee, tea, lattes, donuts, or other treats and
        donate it to Give30 instead. It might be a small change for 30 days, but
        it can make a difference for those who don’t have enough to eat.
      </ColouredDiv>
      <StyledPara>
        Give30WaterlooRegion (WR) started in 2017. Many local organizations have
        collaborated in previous years like Islamic Humanitarian Services,
        Kitchener Masjid, Waterloo Masjid, Muslim Social Services, Maple Grove
        School, Canadian Rohingya Development Initiative, Cambridge Islamic
        Centre, Islamic Circle of North America, Food Bank of Waterloo Region,
        and Cambridge Food Bank. In our first year<b>$12,000</b> were collected,
        <b>$17,000</b> were collected in 2018 and <b>$15,000</b> in 2019. We are
        really proud of our community here in Waterloo Region!
      </StyledPara>
      <StyledPara>
        Many community members help us promote Give30WR along with our local
        MPs, MPPs, mayors, and the chief of police. Head over to our
        <StyledAnchor
          href="https://www.facebook.com/Give30WR/"
          target="_blank"
          rel="noopener"
        >
          Give30WR Facebook Page
        </StyledAnchor>
        to listen to our ambassadors. We are really grateful for their support.
      </StyledPara>
    </StyledDiv>
  )
}
export default Give30
