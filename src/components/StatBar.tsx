import StatBar_module from './StatBar.module.scss';
import Classnames from 'classnames';
type Props = {
    currentQuestion: number;
    totalQuestions: number;
    correct: number;
    incorrect: number;
};

function StatBar(props: Props) {
    return (
        <div className={StatBar_module['stat-container']}>
            <p className={StatBar_module['question-text']}>
                Questions: {props.currentQuestion}/ {props.totalQuestions}
            </p>
            <p>Correct:{props.correct}</p>
            <p>Incorrect:{props.incorrect}</p>
        </div>
    );
}

export default StatBar;
