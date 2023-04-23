import styled from 'styled-components';

export const TitleTask1 = styled.h1`
  text-align: center;
  color: gray; 
`;

export const ProfileContent = styled.div`
   position: absolute; 
   left: 50%; 
   transform: translate(-50%);
   padding: 100px;  
   width:100 px; 
   height: auto; 
   border-radius: 5px;
   background-color: #e7ecf2; 
   border:solid px #e4e9f0;
`;

export const ProfileBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: solid 1px #d8e0ea;
  background-color: white; 
  box-shadow: 0px 0px 10px 0px #ccc;
`;

export const ProfileCard = styled.div`
    margin: 0 auto; 
    width: 500px;
    height: auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`;
  
export const ProfileImage = styled.img`
    margin: 20px auto; 
    max-width: 50%;
    height: 50%;
    border-radius: 50%;
  `;
  
  
export const ProfileName = styled.h2`
    font-size: 1.3rem;
    color:#768696
  `; 
  
export const ProfileText = styled.p`
    font-size: 1.3rem;
    margin-top: 15px;
    padding-bottom: 30px;
    color:#768696

  `; 

export const ProfileStats = styled.ul` 
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto; 
    justify-content:space-between;
    align-items: center;
    background-color: #f3f6f9; 
    width: 100%;
    height: auto;
    box-sizing: border-box; 
    text-align: center;
`;

export const ListStats = styled.li`  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align:center; 
    border-right: solid 1px #e4e9f0;
    
`;

export const ProfileLabel = styled.span`
    color:#768696;
    font-size: 1.5em;
    margin-top: 20px; 
    margin-bottom: 10px;
    
`;

export const ProfileQuantity = styled.span`
   color:#1f3349;
   font-size: 1em; 
   margin-bottom: 20px; 
`;