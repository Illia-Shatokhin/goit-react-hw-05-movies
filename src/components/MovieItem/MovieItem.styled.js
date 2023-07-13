import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Item = styled.li`
  margin-bottom: 5px;
`;

export const MovieLink = styled(Link)`
  color: #434455;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.32px;
  text-decoration: none;
  &:hover {
    color: #4d5ae5;
  }
`;
