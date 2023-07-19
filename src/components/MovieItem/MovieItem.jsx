import { useLocation } from 'react-router-dom';
import { Item, MovieLink } from './MovieItem.styled';

export const MovieItem = ({ id, title, name, way }) => {
  const location = useLocation();
  return (
    <Item>
      <MovieLink to={`${way}${id}`} state={{ from: location }}>
        {title || name}
      </MovieLink>
    </Item>
  );
};
