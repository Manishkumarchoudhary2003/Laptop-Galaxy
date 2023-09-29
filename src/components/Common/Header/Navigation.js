import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
        <NavLink
              to="product"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Product
            </NavLink>
        </li>
        <li>
        <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Login
            </NavLink>
        </li>
        <li>
        <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Register
            </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;