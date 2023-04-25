  import React from 'react';
  import { StatsTitle, StatsBox, StatsList, StatsItem, StatsLabel, StatsPercentage} from '../styles/Statistics.styled.js';
  import PropTypes from 'prop-types';
  const data = require ('./data.json');
  const colors = ['#4bc6f7', '#a63bf2', '#e54d66', '#20b8c5', '#deadd1'];


  function StatisticItem({ label, percentage, bgColor }) {
      return (
        <StatsItem style={{backgroundColor: bgColor}}>
          <StatsLabel >{label}</StatsLabel>
          <StatsPercentage>{percentage}%</StatsPercentage>
        </StatsItem>
      );
    }
  function Statistics() {
    return (
      <>
          <StatsBox >
              <StatsTitle>UPLOAD STATS</StatsTitle>

              <StatsList>
                  {data.map((e, index) => (
                  < StatisticItem
                   key={index}  
                   label={e.label} 
                   percentage={e.percentage}
                   bgColor = {colors[index]} />
            ))}
              </StatsList>
          </StatsBox>
      </>
    );
  }

  Statistics.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };


  export default Statistics;
