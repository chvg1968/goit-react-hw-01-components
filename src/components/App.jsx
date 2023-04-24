import  Profile  from 'components/Profile';
import { TitleTask1 } from '../styles/Profile.styled.js';
import { TitleTask2 } from 'styles/Statistics.styled.js';
import { TitleTask3 } from 'styles/Friends.styled.js';
import { TitleTask4 } from 'styles/Transactions.styled.js';
import Statistics from './Statistics.jsx';
import Friends from './Friends.jsx';
import Transactions from './Transactions.jsx';

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
        <div>
          <TitleTask4>Tarea 4</TitleTask4>
          <Transactions />
        </div>
      </div>
  );
};
