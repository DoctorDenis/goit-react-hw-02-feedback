import StyledStatistics from './Statistics';
import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import { StyledSection } from './Section';
import Notification from './Notification';

export default class Widget extends Component {
  static dafaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onGoodBtnClick = () => {
    this.setState(prevState => {
      return { good: (prevState.good += 1) };
    });
  };

  onNeutralBtnClick = () => {
    this.setState(prevState => {
      return { neutral: (prevState.neutral += 1) };
    });
  };

  onBadBtnClick = () => {
    this.setState(prevState => {
      return { bad: (prevState.bad += 1) };
    });
  };

  render() {
    const {
      good,
      neutral,
      bad,
      total = good + neutral + bad,
      positivePercentage = (good / total) * 100,
    } = this.state;
    return (
      <>
        <StyledSection className title="Please leave feedback">
          <FeedbackOptions
            btnTitles={Object.keys(this.state)}
            methods={[
              this.onGoodBtnClick,
              this.onNeutralBtnClick,
              this.onBadBtnClick,
            ]}
          />
          {Object.values(this.state).every(el => el === 0) ? (
            <Notification message="There is no feedback" />
          ) : (
            <StyledStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={Number.parseInt(positivePercentage)}
            />
          )}
        </StyledSection>
      </>
    );
  }
}
