import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../actions/users";
import { getAllUsers } from "../DATA";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import { Row, Col, Container, Stack } from "react-bootstrap";

function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllUsers().then((res) => dispatch(loadUsers(res)));
  }, []);
  const users = useSelector((state) => state.users.users);
  console.log(users)
  return (
    <Container>
      <Stack className="col-md-5 mx-auto">
        <Row  style={{ height: "300px" }} className="align-items-center">
          <Col>
          {users != null ? 
          <Select options={Object.keys(users)} /> : 
          <p>" There is No users"</p>}
          </Col>
          <Col>
            <Button variant="secondary">Login</Button>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}
export default Login;
{
  /* <select defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>
             className="justify-content-md-center"    Select User...
            </option>
            {users !== [] && users.map((user, i) => {
                return (
                    <option key={i} value={user.fullname}>
                        {user}
                    </option>
                ) })}
        </select> */
}
