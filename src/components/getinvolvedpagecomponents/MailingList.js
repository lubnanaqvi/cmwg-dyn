import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
const StyledDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 60%;
  margin: auto;
  padding: 5%;
  background-color: white;
  color: black;
  border: solid 1px black;
  display: ${props => (props.myid === props.openid ? "block" : "none")};
  @media (max-width: 750px) {
    height: 30%;
  }
`
const StyledForm = styled.form`
  width: 80%;
  margin: 1% auto;
  padding: 2%;
  border: solid 1px grey;
  input {
    width: 80%;
    margin: 0 1%;
  }
  button {
    background-image: linear-gradient(to top left, #73aaaf, teal);
    color: white;
    border: none;
    padding: 0.5em;
    cursor: pointer;
    display: block;
    width: 6em;
    margin: 0.5em auto;
  }
  button:hover {
    background-image: none;
    background-color: #444;
    color: white;
  }
  @media (max-width: 1024px) {
    width: 95%;
    margin: 2em 0;
  }
`
const CloseBtn = styled.div`
  width: 100px;
  margin: 3% auto;
  background-color: #451559;
  color: white;
  padding: 1%;
  text-align: center;
  &:hover {
    background-color: black;
    background-image: none;
    cursor: pointer;
  }
`

const MailingList = ({ clickHandler, openid, myid }) => {
  const [userEmail, setUserEmail] = useState("")
  const handleChange = e => {
    setUserEmail(e.target.value)
  }
  const handleClick = e => {
    e.preventDefault()
    if (userEmail && userEmail !== "")
      addToMailchimp(userEmail)
        .then(data => {
          if (data.result === "success")
            alert("Thank you. Your email have been added to the mailing list")
          else
            alert(
              "Something went wrong. Please make sure you are using a valid email address."
            )
        })
        .catch(error => {
          alert(error)
        })
        .finally(clickHandler(e))
  }
  return (
    <StyledDiv openid={openid} myid={myid}>
      To join our mailing list, please enter your email below:
      <StyledForm>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          Subscribe
        </button>
      </StyledForm>
      <CloseBtn onClick={clickHandler}>Close</CloseBtn>
    </StyledDiv>
  )
}
export default MailingList
