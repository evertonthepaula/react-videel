import styled from 'styled-components';

export const ListOptions = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  padding: 2px 0;
  margin: 2px 0;
  position: absolute;
  left: 0;
  bottom: 100%;
  border-radius: 4px;
  color: #fff;
  background-color: #5dafff;
  border: 1px solid #5dafff;
`;

export const Option = styled.span`
  position: relative;
  margin: 0 0 8px;
  height: 24px;
  line-height: 24px;

  background: ${props =>
    props.current.toString() === props.label ? '#167abc' : ''};

  &:before {
    content: attr(label);
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    font-size: 12px;
    color: #000;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export default {
  Option,
  ListOptions
};
