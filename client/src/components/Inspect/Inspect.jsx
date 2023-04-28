import { Fragment, useState } from "react";
import styled from "styled-components";
import { inspectUser } from "../../services/userService";
import Input from "../Input/Input";
import UserProfile from "../UserProfile/UserProfile";
import Button from "../Button/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ h }) => h};
  width: ${({ w }) => w};
`;

const Inspect = () => {
  const [hasData, setHasData] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});

  const resetPage = () => setHasData(false);

  const inputs = {
    name: "username",
    type: "text",
    placeholder: "Username",
    label: "Username",
  };

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inspectUser(username)
      .then((result) => {
        setHasData(true);
        setUserData(result);
      })
      .catch((error) => console.log(error));
  };

  if (!hasData) {
    return (
      <Container h="90vh">
        <div className="field has-text-centered">
          <div className="control">
            <Input
              className="input has-text-centered"
              {...inputs}
              onChange={onChange}
            />
          </div>
          <div className="control">
            <button className="button is-large is-dark" onClick={handleSubmit}>
              INSPECT
            </button>
          </div>
        </div>
      </Container>
    );
  } else {
    return (
      <Fragment>
        <Container h="70vh">
          <UserProfile data={userData} />
        </Container>
        <Container h="30vh">
          <Button w="40vw" type="submit" className="button" onClick={resetPage}>
            Go Back
          </Button>
        </Container>
      </Fragment>
    );
  }
};

export default Inspect;
