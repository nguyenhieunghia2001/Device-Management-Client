import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonSubmit,
  FormWrapper,
  Header,
  Input,
  InputGroup,
  Label,
  TagBottom,
} from "./Auth.style";

const SignUpPage = () => {
  return (
    <FormWrapper>
      <Header>Đăng ký</Header>
      <InputGroup>
        <Label>Email</Label>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <Label>Mật khẩu</Label>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <Label>Nhập lại mật khẩu</Label>
        <Input type="text" />
      </InputGroup>
      <ButtonSubmit>
        <button type="submit">Đăng ký</button>
      </ButtonSubmit>
      <TagBottom>
        Đã có tài khoản
        <Link to="/signin">Đăng nhập</Link>
      </TagBottom>
    </FormWrapper>
  );
};

export default SignUpPage;
