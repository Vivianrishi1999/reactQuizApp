import QuestionComp from "./components/Question";
import StatBar from "./components/StatBar";
import questions from "./questions.json"
import { Questions } from './types';
import { useState } from "react";
function App() {

    const allQuestions = questions as Questions
    const [curretnQuestionIdx, setCurrentQuestionIdx] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [incorrectAnswers, setInCorrectAnswers] = useState(0)

    return (
        <div>
            <StatBar currentQuestion={curretnQuestionIdx + 1} 
                     totalQuestions={allQuestions.questions.length} 
                     correct={correctAnswers} 
                     incorrect={incorrectAnswers}            
            
            
            
            />
            <QuestionComp
            
            question={allQuestions.questions[curretnQuestionIdx]}
            onSubmit={()=> {}}
            
            />
        </div>
    );
}

export default App;
