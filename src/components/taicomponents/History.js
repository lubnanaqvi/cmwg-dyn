import React from "react"
import styled from "styled-components"
import tai from "../../images/tai.png"
const History = ({ id }) => {
  const StyledH2 = styled.h2`
    font-size: 2.5em;
    margin: 0;
    padding: 0;
  `
  const StyledPara = styled.p`
    margin: 0 0 3% 0;
    padding: 0;
    line-height: 1.4em;
    @media (max-width: 750px) {
      margin-bottom: 5%;
    }
  `
  const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 40% auto;
    grid-gap: 2vw;
    color: white;
    padding: 1%;
    margin: 1%;
    background-color: #531d35;
    @media (max-width: 750px) {
      grid-template-columns: auto;
      grid-template-rows: 200px auto;
    }
  `
  const StyledPic = styled.div`
    background-image: url(${tai});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `
  const StyledGoal = styled.span`
    padding: 0 1%;
    font-size: 1.6em;
    text-decoration: underline;
  `
  return (
    <div id={id}>
      <StyledH2 className="cookiefont">History &amp; Background</StyledH2>
      <StyledPara>
        The Coalition of Muslim Women’s ‘Together Against Islamophobia’ project
        was previously known as ‘Hate Crimes and Incidents’ (HCI) project which
        started in 2012 with Newcomer Partnership Grant in the amount of $3000
        from Kitchener Waterloo Community Foundation and United Way Waterloo
        Region. HCI was a pro-active response to the many experiences of
        Islamophobic hate crimes and incidents shared by the CMW membership and
        volunteer base. Various workshops and training sessions were conducted
        to bring awareness to the local Muslim women on how to identify hate
        crimes as well as how to respond and heal. A major goal at the time was
        to encourage documentation of hate incidents. The project was wrapped up
        and the final report of the pilot project was released in Spring 2015
        and can be found here.
      </StyledPara>
      <StyledPara>
        In October 2015, the experience of having Muslim women’s choice of
        clothing as a divisive issue during Canadian federal elections and the
        retaliatory hate crimes to a terrorist attack in France compelled CMW to
        continue the project and set up a hotline to report hate incidents. The
        attack at the Quebec City Mosque in Quebec in 2017 that killed six
        worshippers cemented the need of the project and CMW started looking for
        funding. Together project is now primarily funded by Inspirit Foundation
        to support CMW to continue the organization’s primary mission of
        building understanding between the Muslim community (with a focus on
        Muslim women) and the broader community and strengthen the voices of
        Muslim women in the Kitchener-Waterloo region. This includes developing
        a pool of Muslim women leaders of diverse backgrounds and ages to serve
        on the board and committees, hiring a coordinator for an Islamophobia
        awareness project and securing additional resources to evaluate and
        document the CMW model for scaling and replication.
      </StyledPara>

      <StyledGrid>
        <StyledPic />
        <div>
          <StyledPara>
            Four major goals of the Together Against Islamophobia are to:
          </StyledPara>
          <StyledGoal className="cookiefont">Empower </StyledGoal> Muslim
          Community (with a focus on women and youth) through education and
          connections
          <br />
          <StyledGoal className="cookiefont">Engage</StyledGoal> the larger
          community in the discussions about Islamophobia and how to be an ally
          <br />
          <StyledGoal className="cookiefont">Encourage</StyledGoal> connections
          between Muslim community and the larger community through acts of
          kindness.
          <br />
          <StyledGoal className="cookiefont">Advocate</StyledGoal> work for
          systems level change
        </div>
      </StyledGrid>
      <StyledPara>
        CMW and Community Justice Initiatives are proud to work together on a
        new project titled “Together” to explore the applications of restorative
        justice approaches at prevention and intervention levels as alternative
        responses to hate crimes / hate incidents motivated by Islamophobia.
        This one year demonstration project is funded by Kitchener-Waterloo
        Community Foundation.
      </StyledPara>
    </div>
  )
}
export default History
