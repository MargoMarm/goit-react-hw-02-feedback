import { ButtonOption } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <ButtonOption
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </ButtonOption>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
