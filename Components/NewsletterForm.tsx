import { useState } from "react";
import styled from "styled-components";

const NewsletterForm = () => {

  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setEmail('')
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) setSuccess(true);
  }

  return(
    <Wrapper>
      { !success ? 
        <FormWrapper>
          Your email address
          <form onSubmit={handleSubmit}>
            <CustomInput type="email" value={email} onChange={(e: any) => {setEmail(e.target.value)}}/>
            <CustomButton onClick={handleSubmit}> Submit </CustomButton>
          </form>
        </FormWrapper>
        :
        <Success>
          You subscribed successfully !
        </Success>
      }
    </Wrapper>
  )
}

export default NewsletterForm

const FormWrapper = styled.div`
  font-size: clamp(0.8rem, 0.9rem, 1rem);
  letter-spacing: 1px;
  padding-top: 20px;
  display: flex;;
    gap: 7px;
    flex-wrap: wrap;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 0.6rem;
    padding-top: 5px;
  }
`

const CustomInput = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  min-width: 220px;
  border-bottom: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: black;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    min-width: 150px;
  }
`

const Wrapper = styled.div`
  
`

const Success = styled.div`
  padding-top: 20px;
  font-size: clamp(0.8rem, 0.9rem, 1rem);
  color: #5cb55c;

  @media (max-width: 600px) {
    font-size: 0.6rem;
    padding-top: 5px;
  }
`

const CustomButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  border-radius: 0;
  border: solid 1px black;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`