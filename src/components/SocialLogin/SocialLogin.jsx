import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="text-center ">
      <button
        className="font-bold border-black border-solid border-2 rounded p-3"
        onClick={handleGoogle}
      >
        Sign In With Google
      </button>
    </div>
  );
};

export default SocialLogin;
