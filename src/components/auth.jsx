import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export const Auth = ()=>{
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
        }catch(err){
            console.error(err);
        }
    }

    const logOut = async () => {
        try{
            await signOut (auth);
        }catch(err){
            console.error(err);
        }
    }

    return(<div>
        <button onClick={()=>signInWithGoogle()}>Login in w/ google</button>
        <button onClick={()=>logOut()}>Logout</button>
    </div>)
}