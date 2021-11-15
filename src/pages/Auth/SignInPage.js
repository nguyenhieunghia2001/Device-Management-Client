import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  ButtonSubmit,
  FormWrapper,
  Header,
  Input,
  InputGroup,
  Label,
  TagBottom,
} from "./Auth.style";
import { createGlobalStyle } from "styled-components";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm();
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });
  const onSubmit = (data) => console.log(data);
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Header>ĐĂNG NHẬP</Header>
      <InputGroup>
        <Label focus={focus.email}>Email</Label>
        <Input
          type="text"
          {...register("email", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
            onChange: (e) => {
              setFocus((pre) => {
                return {
                  password: pre.password,
                  email: e.target.value ? true : false,
                };
              });
            },
          })}
        />
        {errors?.email?.type === "required" && <p>Vui lòng điền email!</p>}
        {errors?.email?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
      </InputGroup>
      <InputGroup>
        <Label focus={focus.password}>Mật khẩu</Label>
        <Input
          type="text"
          {...register("password", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
            onChange: (e) => {
              setFocus((pre) => {
                return {
                  email: pre.email,
                  password: e.target.value ? true : false,
                };
              });
            },
          })}
        />
      </InputGroup>
      <ButtonSubmit>
        <button type="submit">ĐĂNG NHẬP</button>
      </ButtonSubmit>
      <TagBottom>
        Chưa có tài khoản
        <Link to="/signup">Đăng ký</Link>
      </TagBottom>
      <TagBottom>
        <Link to="/forget">Quên mật khẩu?</Link>
      </TagBottom>
    </FormWrapper>
  );
};

export default LoginPage;
