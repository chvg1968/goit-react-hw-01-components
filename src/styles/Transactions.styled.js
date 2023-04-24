import styled from 'styled-components';

export const TitleTask4 = styled.h1`
  margin-top: 890px; 
  margin-bottom: 50px;   
  text-align: center;
  color: gray; 
`;

export const Table = styled.table`
  position: absolute; 
  left: 50%; 
  transform: translate(-50%);
  border-collapse: collapse;
  border-radius: 5px;
  width: 700px; 
  margin: 20px;
  font-size: 1rem;
  font-weight: 500;
  text-align:center; 
  margin-top: 10px;
`;

export const THead = styled.thead`
  background-color: #0abed1;
  text-align: center;
`;

export const TBody = styled.tbody`
  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;


export const TR = styled.tr`
 color: #969a9d
`;

export const TH = styled.th`
  padding: 10px 20px;
  text-transform: Uppercase;
  color: white; 
`;

export const TD = styled.td`
  padding: 10px 20px;
  border: 1px solid #f0f0f0;
  &::first-letter {
    text-transform: uppercase;
  }
`;