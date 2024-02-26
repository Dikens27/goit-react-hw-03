import css from './App.module.css';
import { useState, useEffect } from 'react';
import Description from '../description/Description';
import Feedback from '../feedback/Feedback';
import Options from '../options/Options';
import Notification from '../notification/Notification';

const initialState = { good: 0, neutral: 0, bad: 0 };

const getInitialFeedback = () => {
  const storedFeedback = window.localStorage.getItem('feedback');
  return storedFeedback !== null ? JSON.parse(storedFeedback) : initialState;
};

export default function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) +
    '%';

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
