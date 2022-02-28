import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers, auth } from "../actions/users";
import { getAllUsers } from "../DATA";
import Button from "react-bootstrap/Button";
import { Row, Col, Container, Stack, Form } from "react-bootstrap";
import { Navigate } from 'react-router-dom';

function Login() {
  useEffect(() => {
    getAllUsers().then((res) => dispatch(loadUsers(res)));
    document.body.style.backgroundColor = "lightgray";
  }, []);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [selectedUser, setUser] = useState(null);

  function authenticatedUser() {
    dispatch(auth(selectedUser));
    return <Navigate to="/Profile" replace={true}/>
  }
  return (
    <Container className="container">
      <Stack gap={2} className="col-md-5 mx-auto">
        <Row className="align-items-center text-center min-vh-100">
          <Col>
            <Form.Select
              defaultValue={"DEFAULT"}
              size="lg"
              onChange={(e) => setUser(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Select User...
              </option>
              {users != null &&
                Object.values(users).map((user, i) => {
                  return (
                    <option key={i} value={user.fullname}>
                      {user.fullname}
                    </option>
                  );
                })}
            </Form.Select>
          </Col>
          <Col>
            <Button variant="secondary" onClick={() => authenticatedUser()}>
              Login
            </Button>
          </Col>
        </Row>
      </Stack>
      {/* // : ( // <Spinner className="loading" animation="grow" />
      // )} */}
    </Container>
  );
}
export default Login;
