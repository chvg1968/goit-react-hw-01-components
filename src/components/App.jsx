import  Profile  from 'components/Profile';
import { TitleTask1 } from '../styles/Profile.styled.js';
import { TitleTask2 } from 'styles/Statistics.styled.js';
import { TitleTask3 } from 'styles/Friends.styled.js';
import Statistics from './Statistics.jsx';
import Friends from './Friends.jsx';

export const App = () => {
  return (
      <div className="App">
        <div>
          <TitleTask1>Tarea 1</TitleTask1>  
          <Profile />
        </div>
        <div>
          <TitleTask2>Tarea 2</TitleTask2>
          <Statistics />
        </div>
        <div>
          <TitleTask3>Tarea 3</TitleTask3>
          <Friends />
        </div>
      </div>
  );
};
