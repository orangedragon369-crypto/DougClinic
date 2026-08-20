import { NavLink } from "react-router-dom";

export default function Nav(){
  const activeClass = ({ isActive }) => isActive ? "active" : "";

  return (
    <nav className="column">
      <NavLink to={"/"}end className={activeClass}>Home</NavLink>
      <NavLink to={"/how-it-works"} className={activeClass}>How It Works</NavLink>
      <NavLink to={"/douglas-ludington"} className={activeClass}>Douglas Ludington, NP</NavLink>
      <NavLink to={"/services"} className={activeClass}>Services</NavLink>
      <NavLink to={"/rates-and-pricing"} className={activeClass}>Rates & Pricing</NavLink>
      <NavLink to={"/faqs"} className={activeClass}>FAQs</NavLink>
      <NavLink to={"/contact"} className={activeClass}>Contact</NavLink>
      <NavLink to={"/get-on-the-waitlist"} className={activeClass}>Get on the Waitlist</NavLink>
      <NavLink to={"/calendar"} className={activeClass}>calendar test link</NavLink>
    </nav>
  );
}