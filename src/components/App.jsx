import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeavFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback() {
    const values = Object.values(this.state);
    const totalFeedback = values.reduce((total, value) => (total += value), 0);
    return totalFeedback;
  }

  countPositiveFeedbackPercentage = total => {
    const percetnage = Math.round((this.state.good * 100) / total);

    return percetnage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeavFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(total)}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
