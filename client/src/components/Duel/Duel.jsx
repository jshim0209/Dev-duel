import { Fragment, React, useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import UserProfile from "../UserProfile/UserProfile";
import Winner from "./Winner";
import { duelUsers } from "../../services/userService";
import Button from "../Button/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ h }) => h};
  width: ${({ w }) => w};
`;

const StyledVersus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

const Duel = () => {
  const [hasData, setHasData] = useState(false);
  const [userData, setUserData] = useState([]);

  const userInputs = [];
  const goBack = () => setHasData(false);

  console.log(userData);

  const onChange = (e) => {
    console.log(e.target.value);
    userInputs[e.target.id] = e.target.value;
  };

  console.log(userInputs);

  const handleSubmit = (e) => {
    e.preventDefault();

    duelUsers(userInputs[0], userInputs[1])
      .then((result) => {
        setHasData(true);
        setUserData(result);
      })
      .catch((error) => console.log(error.message));
  };

  if (!hasData) {
    return (
      <Container w="100vw" h="100vh">
        <Input id={0} onChange={onChange} placeholder="Username1" />
        <StyledVersus>
          <img
            onClick={handleSubmit}
            src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png"
            alt="versus"
          />
        </StyledVersus>
        <Input id={1} onChange={onChange} placeholder="Username2" />
      </Container>
    );
  } else {
    return (
      <Fragment>
        <Container>
          <div>
            <UserProfile data={userData[0]} />
          </div>
          <div>
            <UserProfile data={userData[1]} />
          </div>
        </Container>
        <Container>
          <Winner user1={userData[0]} user2={userData[1]} />
        </Container>
        <Container>
          <Button w="80vw" type="submit" className="button" onClick={goBack}>
            Go Back
          </Button>
        </Container>
      </Fragment>
    );
  }
};

export default Duel;
