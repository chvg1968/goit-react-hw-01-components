
import styled from 'styled-components';

export const TitleTask3 = styled.h1`
  margin-top: 500px; 
  margin-bottom: 50px;   
  text-align: center;
  color: gray; 
`;

export const Container = styled.div`
  position: absolute; 
  left: 50%; 
  transform: translate(-50%);
  width: 300px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Card = styled.li`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #ccc;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

export const CardAvatar = styled.img`
    position: relative; 
    margin-left: -4%;
    width: 200 px;
    height: 200 px;
    border-radius: 5px
    border: solid 1px red; 
    
`;

export const CardStatus = styled.span`
    position: relative;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 10px;
`;


export const CardName = styled.p`
    position: relative;
    font-weight: bold;
    margin-right: 180px; 
    padding: 5px; 
    font-size: 24px; 
`;

export const CardIconOn = styled.span`
    background-color: green;
`;

export const CardIconOff = styled.span`
    background-color: red;
`;