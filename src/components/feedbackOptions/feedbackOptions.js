import { Button } from 'components/feedback/feedback.Styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(item => (
        <Button type="button" name={item} onClick={onLeaveFeedback}>
          {item.replace(item[0], item[0].toUpperCase())}
        </Button>
      ))}
    </>
  );
};
