import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { userLogin } from "../utils/AuthCall";
import { toast } from "react-toastify";

const UserLoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUserContext()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await userLogin(email, password)
      console.log('Login success:', data);

      if (data.error) {
        toast.error(data.error);
        return;
      }

      if (!data.user || !data.token) {
        toast.error('User data or token is missing');
        return;
      }

      const { user, token, message } = data;
      console.log('User logged in:', user.role, token);

      login(user, token);
      toast.success(` Välkommen ${user.name}`);
      navigate('/map')
    } catch (error){
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleGitHubLogin = () => {
    window.location.href = 'http://localhost:5001/api/v1/auth/github'
  }

  return (
    <div>
      <h1>Login</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-postadress</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ange din e-post"
              // required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Lösenord</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ange ditt lösenord"
              // required
            />
          </div>

          <button type="submit" className="btn-primary" onClick={handleLogin}>
            Logga in
          </button>
        </form>
      <button
        className='btn primary-btn'
        onClick={handleGitHubLogin}>
        Login with GitHub
      </button>
      <br></br>
      <Link to="/register">
        Registrera dig här
      </Link>
    </div>
  );
};

export default UserLoginPage;






// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useUserContext } from "../context/UserContext";
// import { userLogin } from "../utils/AuthCall";
// import { toast } from "react-toastify";

// const UserLoginPage = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const { login } = useUserContext()
//   const navigate = useNavigate()

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await userLogin(email, password)
//       if(!response.ok) {
//         const error = await response.json()
//         toast.error(error.message)
//         return
//       }
//       const data = await response.json()
//       const {user, token, message} = data.data
//       login(user, token)
//       toast.success(` Välkommen ${user.name}`)
//       navigate('/map')
//     } catch (error){
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   const handleGitHubLogin = () => {
//     window.location.href = 'http://localhost:5001/api/auth/github'
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//         <form className="login-form">
//           <div className="form-group">
//             <label htmlFor="email">E-postadress</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Ange din e-post"
//               // required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Lösenord</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Ange ditt lösenord"
//               // required
//             />
//           </div>

//           <button type="submit" className="btn-primary" onClick={handleLogin}>
//             Logga in
//           </button>
//         </form>
//       <button onClick={handleGitHubLogin}>
//         Login with GitHub
//       </button>
//       <Link to="/register">
//         Registrera dig
//       </Link>
//     </div>
//   );
// };

// export default UserLoginPage;
