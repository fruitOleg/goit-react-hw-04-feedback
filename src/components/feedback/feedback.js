import { FeedbackOptions } from 'components/feedbackOptions/feedbackOptions';
import { Title } from './feedback.Styled';
export const Feedback = ({ good, neutral, bad, onLeaveFeedback, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <FeedbackOptions
        good={good}
        neutral={neutral}
        bad={bad}
        onLeaveFeedback={onLeaveFeedback}
      />
    </>
  );
};
