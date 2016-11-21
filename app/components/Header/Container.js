/* eslint no-confusing-arrow: 0 */
import styled from 'styled-components';

const open = 100;
const shrink = 60;
const vpad = (open - shrink) / 2;

const Container = styled.div`
  height: 100%;
  text-align: center;
  padding: ${(props) => props.scrolled > vpad ? '0' : '20px'} 0;
  transition: all 0.3s ease;
`;

export default Container;
