import { useLocation } from 'react-router-dom';
import { Item, MovieLink } from './MovieItem.styled';
import PropTypes from 'prop-types';

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

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  way: PropTypes.string,
};
