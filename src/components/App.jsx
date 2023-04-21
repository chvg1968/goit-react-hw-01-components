import  Profile  from 'components/Profile';
import { TitleTask } from '../styles/Profile.styled.js';

export const App = () => {
  return (
      <div className="App">
      <div className="full-container">
        <TitleTask>Tarea 1</TitleTask>  
      <Profile />
      </div>
    </div>
  );
};
