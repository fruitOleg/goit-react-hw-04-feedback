import { Button } from 'components/feedback/feedback.Styled';
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button type="button" name="Good" onClick={onLeaveFeedback}>
        Good
      </Button>
      <Button type="button" name="Neutral" onClick={onLeaveFeedback}>
        Neutral
      </Button>
      <Button type="button" name="Bad" onClick={onLeaveFeedback}>
        Bad
      </Button>
    </>
  );
};
