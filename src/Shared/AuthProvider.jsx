import app from '../Firebase/firebase__config__';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
// export const auth = getAuth(app)
// export const provider = new GoogleAuthProvider;


const AuthProvider = ({ children }) => {


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        createUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;