import Button from "./Button";
import { useLocation } from "react-router";

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <div className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "black"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </div>
  );
};

export default Header;
