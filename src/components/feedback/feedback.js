import { FeedbackOptions } from 'components/feedbackOptions/feedbackOptions';
import { Title } from './feedback.Styled';
export const Feedback = ({ options, onLeaveFeedback, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
    </>
  );
};
