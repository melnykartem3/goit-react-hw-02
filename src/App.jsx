import { useState, useEffect } from 'react';
import Description from './components/Description';
import Options from './components/Options';
import Notification from './components/Notification';
import Feedback from './components/Feedback';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbacks = localStorage.getItem('feedbacks');
    return savedFeedbacks !== null
      ? JSON.parse(savedFeedbacks)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
