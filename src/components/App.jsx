import React from 'react';
import Section from './Section';
import FeedbackOptions from './FeedBackOptions';
import Statistics from './Statistic';
import { useState } from 'react';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = {
    good, neutral, bad
  }
  const onLeaveFeedback = (event) => {
   const  variant = event.currentTarget.textContent;
    if (variant === 'good') {
     setGood(good + 1)
    }
       if (variant === 'neutral') {
     setNeutral(neutral + 1)
       }
       if (variant === 'bad') {
     setBad(bad + 1)
   }
  }
    const countTotalStatistics = () => {
    const total = good + neutral + bad;
    return total;
  }

  const positivePercentage = () => Math.round((good / countTotalStatistics()) * 100) || 0;
    

  
     return (
    <div>
        <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={onLeaveFeedback} />
         </Section>

         <Section title='Statistics'>
           <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalStatistics()}
              positivePercentage={positivePercentage()} />
         </Section>
    </div>
  );
};

export default App;