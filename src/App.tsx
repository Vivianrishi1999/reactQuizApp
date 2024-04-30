import QuestionComp from './components/Question';
import StatBar from './components/StatBar';
import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';
import App_module from './App.module.scss';
import Reset from './components/Reset';
import Answer_module from './components/Answer.module.scss';
import Classnames from 'classnames';
function App() {
    const allQuestions = questions as Questions;
    const [curretnQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setInCorrectAnswers] = useState(0);

    const [waitingtoAdvance, setWatitingtoAdvance] = useState(false);

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setInCorrectAnswers(incorrectAnswers + 1);

        setWatitingtoAdvance(true);
    };

    const advance = () => {
        setWatitingtoAdvance(false);
        setCurrentQuestionIdx(curretnQuestionIdx + 1);
    };

    const reset = () => {
        setCorrectAnswers(0);
        setCurrentQuestionIdx(0);
        setInCorrectAnswers(0);
        setWatitingtoAdvance(false);
    };

    if (curretnQuestionIdx >= allQuestions.questions.length)
        return (
            <Reset
                totalQuestions={allQuestions.questions.length}
                correctQuestions={correctAnswers}
                onPress={reset}
            />
        );

    return (
        <div className={App_module.app}>
            <StatBar
                currentQuestion={curretnQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionComp
                question={allQuestions.questions[curretnQuestionIdx]}
                onSubmit={onSubmit}
            />

            {waitingtoAdvance && (
                <button
                    onClick={advance}
                    className={Classnames(Answer_module.answer, App_module['next-btn'])}
                >
                    {' '}
                    Next Question
                </button>
            )}
        </div>
    );
}

export default App;
