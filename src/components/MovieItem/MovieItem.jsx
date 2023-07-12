import { Link } from 'react-router-dom';

export const MovieItem = ({ id, title, name, way }) => {
  return (
    <li>
      <Link to={`${way}${id}`}>{title || name}</Link>
    </li>
  );
};
