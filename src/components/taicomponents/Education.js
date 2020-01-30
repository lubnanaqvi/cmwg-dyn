import React from "react"
import styled from "styled-components"
const Education = ({ id }) => {
  const StyledDiv = styled.div``
  const StyledSpan = styled.span`
    padding: 0;
    margin: 0;
    font-size: 1.6em;
    text-decoration: underline;
  `
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    margin: 0;
    padding: 0;
  `
  const StyledPara = styled.p`
    margin: 0;
    padding: 0;
    line-height: 1.4em;
  `
  const PurpleDiv = styled.div`
    color: white;
    padding: 1%;
    margin: 1%;
    background-color: #531d35;
  `
  return (
    <StyledDiv id={id}>
      <StyledH2 className="cookiefont">Education / Training</StyledH2>
      <StyledSpan className="cookiefont">Introduction</StyledSpan>
      <StyledPara>
        The Coalition of Muslim Women of KW’s ‘Together Against Islamophobia’
        project provides training on issues arising from Islamophobia in
        Waterloo Region. This training is developed by CMW with the aim to
        provide not-for-profit, public and corporate sector organisations with
        resources to better serve their Muslim clients and to equip them to
        resolve contentious situations involving a Muslim staff or client with a
        restorative justice approach in a human rights framework.
      </StyledPara>

      <StyledSpan className="cookiefont">Training Components</StyledSpan>
      <StyledPara>The components of the training may include:</StyledPara>
      <PurpleDiv>
        <ul>
          <li>
            A brief introduction about Muslim religious practices relevant to an
            organizational setting
          </li>
          <li>
            Understanding the common misconceptions about Islam and Muslims
          </li>
          <li>Root causes and impact of Islamophobia</li>
          <li>Case scenarios specific to the sector</li>
        </ul>
      </PurpleDiv>
      <StyledSpan className="cookiefont">
        Duration, audience and other details
      </StyledSpan>
      <StyledPara>
        Since the training will be designed according to the requirements of the
        organisation, the duration can range from a one hour session to two day
        workshops. Depending on the topics, we can accommodate up to fifty
        participants. The sessions are very interactive and utilises small group
        discussions, videos and reflections etc. The cost will be determined
        based on duration. Some of our previous clients include Region of
        Waterloo, Wellbeing Waterloo Region, and Registry Theater.
      </StyledPara>
    </StyledDiv>
  )
}
export default Education
