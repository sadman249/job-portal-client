import { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const { singInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='m-4'>
              <div className="divider">OR</div>

              <p className="flex justify-center mt-5">
                <button onClick={handleGoogleSignIn} className='ml-2 btn font-bold w-full border-slate-300 h-auto p-2 hover:rounded-full'>
                  <FcGoogle className="size-6" /> Continue with Google
                </button>
              </p>

        </div>
    );
};

export default SocialLogin;