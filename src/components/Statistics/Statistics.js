import PropTypes from 'prop-types';

import { Notification } from '../Notifications/Notifications.js';
import { StatWrapper, StatItem } from './Statistics.styled.jsx';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  if (good || neutral || bad) {
    return (
      <StatWrapper>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Posititve Feedback: {positivePercentage}%</StatItem>
      </StatWrapper>
    );
  } else {
    return <Notification text="There is no feedback" />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
