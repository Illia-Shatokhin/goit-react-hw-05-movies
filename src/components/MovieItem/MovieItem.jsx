import { Item, MovieLink } from './MovieItem.styled';

export const MovieItem = ({ id, title, name, way }) => {
  return (
    <Item>
      <MovieLink to={`${way}${id}`}>{title || name}</MovieLink>
    </Item>
  );
};
