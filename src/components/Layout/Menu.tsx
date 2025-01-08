import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { Basket } from "../../features/Products/Basket";

type Props = {
  to: string;
  children: string;
};

const DtNavLink = ({ to, children }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive ? "text-red-600" : isPending ? "text-yellow-600" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-3 dark:text-slate-300">
          <li>
            <DtNavLink to={routes.HOME.path}>Home</DtNavLink>
          </li>
          <li>
            <DtNavLink to={routes.COUNTER.path}>Counter</DtNavLink>
          </li>
          <li>
            <DtNavLink to={routes.GENERATOR.path}>Generator</DtNavLink>
          </li>
          <li>
            <DtNavLink to={routes.REGISTRATION.path}>Registration</DtNavLink>
          </li>
          <li>
            <DtNavLink to={routes.STEPPER.path}>Stepper</DtNavLink>
          </li>
          <li>
            <DtNavLink to={routes.PRODUCT.path}>Product</DtNavLink>
          </li>
          <li>
            <DtNavLink to={routes.BASKET.path}>Basket</DtNavLink>
          </li>
          <li>
         <Basket ></Basket>
          </li>
        </ul>
      </nav>
    </div>
  );
};
