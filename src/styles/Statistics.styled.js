import styled from 'styled-components';

export const TitleTask2 = styled.h1`
  margin-top: 870px; 
  margin-bottom: 50px;   
  text-align: center;
  color: gray; 
`;

export const StatsBox = styled.section`
    position: absolute; 
    left: 50%; 
    transform: translate(-50%);
    width: 700px;
    height: auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eff3f6;
    border-radius: 5px; 
`;

export const StatsTitle = styled.h2` 
    position: relative;    
    margin: 100px ;  
    width: 50%;
    height: 50px;
    display: flex; 
    justify-content: center;
    align-items: center; 
    flex-grow: 1; 
    color: #656d75; 
    text-align: center;
    background-color: white;  
    padding: 5%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
`;

export const StatsList = styled.ul`
    position:relative; 
    margin-top: -100px; 
    margin-bottom: 100px; 
    display:grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: auto; 
    justify-content: center;
    align-items: center; 
    text-align: center;
    font-size: 0.75rem; 
    padding: 1px; 
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px; 
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
`;

export const StatsItem = styled.li` 
    margin: 0 auto; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 10px; 
    width: 64px;
   
`;

export const StatsLabel = styled.span`
    font-size: 2em; 
    color: #768696; 
`;
  
export const StatsPercentage = styled.span`
    font-size: 2em; 
    color: #768696; 
`;




