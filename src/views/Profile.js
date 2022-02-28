import { Tabs, Tab, Container ,Row , Col} from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuestions } from "../DATA";
import { loadQuestions } from "../actions/questions";
import QuestionCard from "../components/QuestionCard";

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllQuestions().then((res) => dispatch(loadQuestions(res)));
  }, []);
    const questions = useSelector((state) => state.questions.questions);
    const authedUser = useSelector((state) => state.users.authUser);
  console.log(authedUser);
  return (
    <Tabs
      fill
      defaultActiveKey="Answared Questions"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Answared Questions" title="Answared Questions">
          {questions != null ?
          Object.values(questions).map((question, i) => {
            return (
              <QuestionCard
                key={i}
                firstOption={question.firstOption.string}
                secondOption={question.secondOption.string}
              />
            );
          }): <p>no questions</p>}
      </Tab>
      <Tab eventKey="Un Answared Questions" title="Un Answared Questions">
        hi 2
      </Tab>
    </Tabs>
  );
}
export default Profile;
