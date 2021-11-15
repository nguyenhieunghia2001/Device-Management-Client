import React from "react";
import { AuthWrapper, FormWrapper, Header, Input, InputGroup, Label } from "./Auth.style";

const LoginPage = () => {
  return (
    <AuthWrapper>
      <FormWrapper>
        <Header>Đăng nhập</Header>
        <InputGroup>
            <Label>Email</Label>
            <Input type="text"/>
        </InputGroup>
      </FormWrapper>
    </AuthWrapper>
  );
};

export default LoginPage;
