/* eslint no-confusing-arrow: 0 */
import styled from 'styled-components';

const backgroundColor = '#FAFAFA';
const color = '#212121';

const open = 100;
const shrink = 60;
const vpad = (open - shrink) / 2;

const boxShadow = '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2)';
const border = '1px solid rgba(0, 0, 0, 0.12)';

const Root = styled.header`
  display: table-row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1000;
  height: ${
    (props) => props.scrolled > vpad ? shrink : open
  }px;
  border-bottom: ${
    (props) => props.scrolled > vpad ? 'none' : border
  };
  box-shadow: ${
    (props) => props.scrolled > vpad ? boxShadow : 'none'
  };
  background-color: ${backgroundColor};
  color: ${color};
`;

export default Root;
