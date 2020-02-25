import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
  margin-top: 10vh;
  form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    -webkit-box-shadow: inset 1px 0px 8px 0px rgba(164, 183, 214, 1);
    box-shadow: inset 1px 0px 8px 0px rgba(164, 183, 214, 1);
    border-radius: 30px;
    background: rgb(223, 234, 253);
    padding: 15px 30px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #000;
    border: none;
    transition: 200ms;

    &:valid {
      background: #fff;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }

    &:focus {
      background: #fff;
      outline: none;
    }
  }

  button {
    cursor: pointer;
    box-shadow: 1px 0px 8px 0px rgba(164, 183, 214, 1);
    border-radius: 30px;
    background: #fff;
    padding: 15px 30px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #000;
    border: none;
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }
`

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 900;
  margin: 0;
  margin-bottom: 30px;
`

export const Message = styled.div`
  background: ${props =>
    (props.error ? "#f36453" : "") || (props.success ? "#16C72E" : "")};
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 20px 0;
  font-weight: bold;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0%;
  opacity: ${props => (props.error || props.success ? "1" : "0")};
  transition: all 300ms;
`
