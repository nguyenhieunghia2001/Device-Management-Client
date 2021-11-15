import styled from "styled-components";

export const AuthWrapper = styled.div``;
export const FormWrapper = styled.form`
  position: absolute;
  width: 460px;
  max-width: 100%;
  heigth: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 60px 0;
  border-radius: 10px;
`;
export const Header = styled.h2`
  background-color: #fff;
  font-size: 2rem;
  margin: 0;
  padding: 0 60px;
  color: var(--primary-color);
  border-left: 4px solid var(--primary-color);
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #22222294;
  position: absolute;
  top: ${({focus}) => focus ? '-10%': '27%'};
  font-size: ${({focus}) => focus ? '.9rem': '1.2rem'};
  z-index: -1;
`;
export const InputGroup = styled.div`
  position: relative;
  margin-top: 20px;
  padding: 0 60px;
  transition: all ease .3s;
  & p {
    margin: 5px 0;
    color: #ff0000ad;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  padding: 10px 0 5px 0;
  font-size: 1.4rem;
  color: #000;
  border: 0;
  border-bottom: 1px solid #2222228a !important;
  width: 100%;
  ${"" /* transition: all ease 0.2s; */}
  &:active,
  &:focus {
    outline: 0;
    border: 0;
    box-shadow: 0;
  }
  background: transparent;
`;
export const TagBottom = styled.div`
  font-size: 1rem;
  color: #222;
  text-align: center;
  & > a {
    margin-left: 5px;
    color: var(--primary-color);
    text-decoration: none;
  }
`;

export const ButtonSubmit = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  & > button {
    border: 3px solid #afaeaea1;
    padding: 20px 50px;
    font-size: 1.5rem;
    margin: 5px 0;
    font-weight: 600;
    color: #afaeaea1;
    background: transparent;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  }
`;
