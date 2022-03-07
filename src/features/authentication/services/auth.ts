import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { User } from "../types";

const AuthService = {
  signIn: (email: string, password: string): Promise<User> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        resolve({ email: user.email || "" });
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default AuthService;
