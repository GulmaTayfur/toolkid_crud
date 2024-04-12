import { NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="d-flex justify-content-between align-items-center mb-3 p-4">
      <h2>Redux Toolkit</h2>
      <nav className="d-flex gap-5">
        <NavLink to={"/"}>SAYAÇ</NavLink>
        <NavLink to={"/crud"}>CRUD</NavLink>
        <button onClick={() => dispatch(toggleTheme())}>Tema Değiş</button>
      </nav>
    </header>
  );
};

export default Header;
