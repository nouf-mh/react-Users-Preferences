import { Tabs, Tab, Container } from "react-bootstrap";
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
  //   const questions = useSelector((state) => state.questions.questions);
  const questions = {
    tvtzpuph1oo: {
      id: "tvtzpuph1oo",
      creator: "elonmusk",
      created: 1642222679,
      firstOption: {
        votes: ["mohamedqasem"],
        string: "Get 1,000,000$ right now",
      },
      secondOption: {
        votes: ["billgates", "elonmusk"],
        string: "Get 100,000,000$ after 40 years",
      },
    },
    "5yv0wo4lvv8": {
      id: "5yv0wo4lvv8",
      creator: "elonmusk",
      created: 1642324699,
      firstOption: {
        votes: ["billgates"],
        string: "Stay at home on weekends and relax",
      },
      secondOption: {
        votes: [],
        string: "Go out with your friends on weekends",
      },
    },
    jbo66c96nxf: {
      id: "jbo66c96nxf",
      creator: "billgates",
      created: 1642624453,
      firstOption: {
        votes: [],
        string: "Read a book",
      },
      secondOption: {
        votes: [],
        string: "Take a course",
      },
    },
    xpcp92uqgs: {
      id: "xpcp92uqgs",
      creator: "mohamedqasem",
      created: 1642924434,
      firstOption: {
        votes: [],
        string: "Watch a movie",
      },
      secondOption: {
        votes: [],
        string: "Play a game",
      },
    },
  };
  const authedUser = {
    id: 2,
    fullname: "Bill Gates",
    imgUrl:
      "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
    questions: ["jbo66c96nxf"],
    answers: { tvtzpuph1oo: "secondOption", "5yv0wo4lvv8": "firstOption" },
  };
  console.log(questions);
  return (
    <Tabs
      fill
      defaultActiveKey="Answared Questions"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Answared Questions" title="Answared Questions">
        {/* <Container className=" align-items-center">
          {questions.map((question, i) => {
            return (
              <QuestionCard
                key={i}
                firstOption={question.firstOption.string}
                secondOption={question.secondOption.string}
              />
            );
          })}
        </Container> */}
      </Tab>
      <Tab eventKey="Un Answared Questions" title="Un Answared Questions">
        hi 2
      </Tab>
    </Tabs>
  );
}
export default Profile;
