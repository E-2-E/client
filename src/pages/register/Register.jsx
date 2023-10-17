// import Topstat from "../stat/Topstat";
// import "./register.css";
// import React,{ useRef } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// export default function Register() {
//   const username = useRef();
//   const email = useRef();
//   const password = useRef();
//   const cpassword = useRef();

//   const handleClick = (e) => {
//     e.preventDefault();
//     if(cpassword.current.value !== password.current.value){
//       password.current.setCustomValidity("Passwords doesn't match !!!");
//     }
//     else{
//       const user = {
//         username : username.current.value,
//         email : email.current.value,
//         password : password.current.value,
//       }
//       try{
//         await axios.post("/auth/register",user);
//         history.push("/login");
//       }
//       catch(err){console.log(err);}
//     }
//   };

//   return (
//     <div>
//       <Topstat />
//       <div className="login">
//         <div className="loginWrapper">
//           <div className="loginLeft">
//             <h3 className="loginLogo" style={{ color: "whitesmoke" }}>
//               VVIT Connect
//             </h3>
//             <span className="loginDesc">
//               Connect with alumni excellence on VVIT Connect.
//             </span>
//           </div>
//           <div className="loginRight">
//             <form className="loginBox" onSubmit={handleClick}>
//               <input
//                 placeholder="Username"
//                 required
//                 ref={username}
//                 className="loginInput"
//               />
//               <input
//                 placeholder="Email"
//                 required
//                 ref={email}
//                 className="loginInput"
//                 type="email"
//               />
//               <input
//                 placeholder="Password"
//                 required
//                 ref={password}
//                 className="loginInput"
//                 type="password"
//                 minLength="6"
//               />
//               <input
//                 placeholder="Confirm Password"
//                 required
//                 ref={cpassword}
//                 className="loginInput"
//                 type="password"
//               />
//               <button className="loginButton" type="submit">Sign Up</button>
//               <button className="loginRegisterButton">Log into Account</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Topstat from "../stat/Topstat";
import "./register.css";
import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (cpassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords doesn't match !!!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <Topstat />
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo" style={{ color: "whitesmoke" }}>
              VVIT Connect
            </h3>
            <span className="loginDesc">
              Connect with alumni excellence on VVIT Connect.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Username"
                required
                ref={username}
                className="loginInput"
              />
              <input
                placeholder="Email"
                required
                ref={email}
                className="loginInput"
                type="email"
              />
              <input
                placeholder="Password"
                required
                ref={password}
                className="loginInput"
                type="password"
                minLength="6"
              />
              <input
                placeholder="Confirm Password"
                required
                ref={cpassword}
                className="loginInput"
                type="password"
              />
              <button className="loginButton" type="submit">
                Sign Up
              </button>
              <button className="loginRegisterButton">Log into Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
