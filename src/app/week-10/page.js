// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 

export default function Page(){
    // Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth()
 
// Sign in to Firebase with GitHub authentication
const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };
 
// Sign out of Firebase
const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

    return(
        <div>
        {user ? (
          <div>
            <p>Welcome, {user.displayName} ({user.email})</p>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <div>
            <p>Please Sign In</p>
            <button onClick={handleSignIn}>Sign In with GitHub</button>
          </div>
        )}
      </div>
    )
}