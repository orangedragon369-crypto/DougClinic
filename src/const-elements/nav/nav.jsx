import { NavLink } from "react-router-dom";

export default function Nav({baseUrl}){
  const activeClass = ({ isActive }) => isActive ? "active" : "";

  return (
    <nav className="column">
      <NavLink to={baseUrl + "/"}end className={activeClass}>Home</NavLink>
      <NavLink to={baseUrl + "/how-it-works"} className={activeClass}>How It Works</NavLink>
      <NavLink to={baseUrl + "/douglas-ludington"} className={activeClass}>Douglas Ludington, NP</NavLink>
      <NavLink to={baseUrl + "/services"} className={activeClass}>Services</NavLink>
      <NavLink to={baseUrl + "/rates-and-pricing"} className={activeClass}>Rates & Pricing</NavLink>
      <NavLink to={baseUrl + "/faqs"} className={activeClass}>FAQs</NavLink>
      <NavLink to={baseUrl + "/contact"} className={activeClass}>Contact</NavLink>
      <NavLink to={baseUrl + "/get-on-the-waitlist"} className={activeClass}>Get on the Waitlist</NavLink>
      <NavLink to={baseUrl + "/calendar"} className={activeClass}>calendar test link</NavLink>
    </nav>
  );
}