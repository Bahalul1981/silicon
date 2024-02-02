import React from "react";
import { Link } from "react-router-dom";

function HeaderPage() {
  return (
    <div className="main-header-div">
      <div className="Logo-and-text">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="toggle-login"></div>
    </div>
  );
}

export default HeaderPage;

// export default HeaderPage;
// import React from "react";
// import Logo from "./Logo";
// import { NavLink } from "react-router-dom";
// import HomePage from "../Main/Home/HomePage";
// import ContactPage from "../Main/Contact/ContactPage";
// import ErrorPage from "../Main/Error/ErrorPage";
// import FeaturePage from "../Main/Features/FeaturePage";
// import Overview from "../Main/Overview/Overview";

// function HeaderPage() {
//   return (
//     <div className="main-header-div">
//       <div className="Logo-and-text">
//         <header>
//           <Logo />
//           <nav>
//             <ul>
//               <li>
//                 <NavLink to="/" onClick={<HomePage />}>
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact" onClick={<ContactPage />}>
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/error" onClick={<ErrorPage />}>
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/feature" onClick={<FeaturePage />}>
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/element" onClick={<Overview />}>
//                   Home
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>
//         </header>
//       </div>
//       <div className="toggle-login">
//         <div>
//           <p>I am tougle</p>
//         </div>
//         <div>Login / logout</div>
//       </div>
//     </div>
//   );
// }

// export default HeaderPage;
