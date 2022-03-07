import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../../store/app/hooks";
import * as Yup from "yup";

import Button from "../../../../components/Button";
import { performLogin } from "../../store/loginSlice";
import { Box, BoxBody, BoxHeader } from "./styles";

function LoginForm() {
  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.login.loginState);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (values) => {
      dispatch(performLogin(values));
    },
  });

  return (
    <Box>
      <BoxHeader>
        <h1>Login</h1>
        {loginState.pending && <p>logging in</p>}
        {loginState.error && <p style={{ color: "red" }}>login failed</p>}
        {loginState.success && <p style={{ color: "green" }}>login success</p>}
      </BoxHeader>
      <BoxBody>
        <form onSubmit={formik.handleSubmit}>
          <input
            data-testid="email"
            name="email"
            onChange={formik.handleChange}
            type="email"
            placeholder="email"
          />
          <input
            data-testid="password"
            name="password"
            onChange={formik.handleChange}
            type="password"
            placeholder="Password"
          />
          <Button disabled={!formik.dirty || !formik.isValid} type="submit">
            Sign in
          </Button>
        </form>
      </BoxBody>
    </Box>
  );
}

export default LoginForm;
