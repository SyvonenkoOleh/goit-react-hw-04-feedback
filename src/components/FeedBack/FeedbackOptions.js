import PropTypes from 'prop-types';
import { Button, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ButtonsList>
        {options.map(option => (
          <Button
          key={option}
          type="button"
          status={option}
          text={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
          </Button>
        ))}
      </ButtonsList>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
