import React from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useAppDispatch, useAppSelector } from "../store/app/hooks";
import {
  setUser,
  setLoadingUser,
} from "../features/authentication/store/authSlice";

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user, loadingUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email || "" }));
      } else {
        dispatch(setLoadingUser(false));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loadingUser) {
    return <h1>Loading</h1>;
  } else {
    return user ? children : <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
