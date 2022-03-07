import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../../store/app/hooks";
import LoginForm from "../../components/LoginForm";
import { Container } from "./styles";

function LoginPage() {
  const navigate = useNavigate();
  const loginState = useAppSelector((state) => state.login.loginState);

  React.useEffect(() => {
    if (loginState.success) {
      navigate("/", { replace: true });
    }
  }, [navigate, loginState.success]);

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export default LoginPage;
