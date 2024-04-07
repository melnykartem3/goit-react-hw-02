import css from './Feedback.module.css';

export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.feedbackWrapper}>
      <p className={css.feedbackParaghraph}>Good: {feedback.good}</p>
      <p className={css.feedbackParaghraph}>Neutral: {feedback.neutral}</p>
      <p className={css.feedbackParaghraph}>Bad: {feedback.bad}</p>
      <p className={css.feedbackParaghraph}>Total: {totalFeedback}</p>
      <p className={css.feedbackParaghraph}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
