import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
    return (
        <header className={css.header}>
            <nav className={css.header__nav}>
                <NavLink to="/" className={css.header__link}>
                    Home
                </NavLink>
                <NavLink to="/movies" className={css.header__link}>Movies</NavLink>
            </nav>
        </header>
    );
}