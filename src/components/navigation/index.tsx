import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Basic example</Link>
        </li>

        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>
    </ul>
  </nav>
  );
};