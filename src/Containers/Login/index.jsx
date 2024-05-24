
// // import React, { useEffect, useState } from "react";
// import { useForm } from "Hooks/validator";


// import PropTypes from "prop-types";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
// import trilliumHealthLogo from "../../assets/images/trillium-health-logo.png";
// // import trilliumHealthLogo2 from '../../assets/images/trillium-health-logo-3.png'
// import clinicLoginCover1x from "../../assets/images/clinic-login-cover1x.png";
// import clinicLoginCover1_5x from "../../assets/images/clinic-login-cover1_5x.png";
// import clinicLoginCover2x from "../../assets/images/clinic-login-cover2x.png";

// import "./style.css";

// const LoginForm = () => {


//   return (
//     <div className="clinicLogin">
//       <header className="clinicLogin__header">
//         <div className="clinicLogin__header__bar">
//           <a href="#0">
//             <img
//               src={trilliumHealthLogo}
//               alt="trillium-health-logo"
//               className="clinicLogin__header__logo"
//             />
//           </a>

//           <ul>
//             <li>
//               <a href="#0">About</a>
//             </li>
//             <li>
//               <a href="#0">Contact us</a>
//             </li>
//           </ul>
//         </div>
//       </header>

//       <main className="clinicLogin__main">
//         <section className="clinicLogin__section">
//           <div className="clinicLogin__grid">
//             <div className="clinicLogin__grid__col">
//               <h1 className="clinicLogin__grid__heading">
//                 The All-In-One Application for Physicians.
//               </h1>
//               <h2 className="clinicLogin__grid__subheading">
//                 Schedule appointments, virtually visit and securely chat with
//                 your patients - All in a single platform.
//               </h2>
//               <div className="clinicLogin__heroWrapper">
//                 <img
//                   alt="logincoverpicture"
//                   src={clinicLoginCover1x}
//                   srcSet={`${clinicLoginCover1x} 300w, ${clinicLoginCover1_5x} 768w, ${clinicLoginCover2x} 1280w, ${clinicLoginCover2x} 3200w`}
//                   className="clinicLogin__heroImg"
//                 />
//               </div>
//             </div>

//             <div className="clinicLogin__grid__col clinicLogin__grid__col--form">
//               <form onSubmit={handleSubmit} className="clinicLogin__form">
//                 <div
//                   hidden={status === "default" ? true : false}
//                   className="clinicLogin__editableInputField"
//                 >
//                   <TextField
//                     margin="normal"
//                     autoFocus
//                     type="text"
//                     label="Clinic Name"
//                     variant="outlined"
//                     className="clinicLogin__inputField"
//                     {...useInput("clinic_name", {
//                       // isLength: {
//                       //   value: { max: 60 },
//                       //   message: 'Maximum length is 60',
//                       // },
//                       // matches: {
//                       //   value: /^[a-zA-Z0-9-']+$/,
//                       //   message: 'Maximum length is 15',
//                       // },
//                     })}
//                   />
//                   <div className="clinicLogin__editBtn--wrapper">
//                     <IconButton onClick={newlogin}>
//                       <CreateRoundedIcon />
//                     </IconButton>
//                   </div>
//                 </div>

//                 {/* * default state * */}
//                 <div hidden={status === "default" ? false : true}>
//                   <div className="clinicLogin__editableInputField">
//                     <TextField
//                       margin="normal"
//                       autoFocus
//                       type="text"
//                       label="Clinic Name"
//                       variant="outlined"
//                       className="clinicLogin__inputField "
//                       {...useInput("clinic_name", {
//                         isLength: {
//                           value: { max: 100 },
//                           message: "Maximum length is 100",
//                         },
//                         // matches: {
//                         //   value: /^[a-zA-Z0-9- ']+$/,
//                         //   message: 'Maximum length is 15',
//                         // },
//                       })}
//                     />
//                   </div>
//                   <TextField
//                     margin="normal"
//                     required
//                     variant="outlined"
//                     type="number"
//                     label="Clinic ID"
//                     className="clinicLogin__inputField"
//                     {...useInput("clinicId", {
//                       isRequired: {
//                         value: true,
//                         message: "Enter a valid Clinic ID",
//                       },
//                     })}
//                   />
//                 </div>

//                 <TextField
//                   margin="normal"
//                   required
//                   autoComplete="email"
//                   label="Username"
//                   error={loginError}
//                   type="text"
//                   variant="outlined"
//                   className="clinicLogin__inputField"
//                   {...useInput("userName", {
//                     isRequired: {
//                       value: true,
//                       message: "Enter a valid Username",
//                     },
//                   })}
//                 />

//                 <TextField
//                   margin="normal"
//                   required
//                   type="password"
//                   error={loginError ? true : false}
//                   helperText={loginError}
//                   label="Password"
//                   variant="outlined"
//                   className="clinicLogin__inputField"
//                   {...useInput("password", {
//                     isRequired: {
//                       value: true,
//                       message: "Enter a valid Password",
//                     },
//                   })}
//                   autoComplete="current-password"
//                 />

//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   className="clinicLogin__submitBtn"
//                 >
//                   Login
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>
//       <div className="clinicLogin__copyright">
//         <Typography
//           variant="caption"
//           align="center"
//           color="textSecondary"
//           display="block"
//         >
//           Copyright &copy; {new Date().getFullYear()}-
//           {new Date().getFullYear() + 1} trillium.health
//         </Typography>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   LoginData: state.login,
//   priorAuthData: state.priorAuth,
// });

// const mapDispatchToProps = (dispatch) => ({
//   submitLogin: (values) => dispatch(clickLogin(values)),
//   apiStatus: (values) => dispatch(apiStatus(values)),
//   getuserData: (values) => dispatch(getuserData(values)),
//   loginResponse: (values) => dispatch(loginResponse(values)),
//   loginInfo: (values) => dispatch(loginInfo(values)),
// });
// LoginForm.propTypes = {
//   submitLogin: PropTypes.func,
//   apiStatus: PropTypes.func,
//   LoginData: PropTypes.object,
//   getuserData: PropTypes.func,
//   loginResponse: PropTypes.func,
//   loginInfo: PropTypes.func,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
