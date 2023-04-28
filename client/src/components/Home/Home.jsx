import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const StyledHome = styled.div`
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 64px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ h }) => h};
  width: ${({ w }) => w};
`;

const Home = () => {
  return (
    <StyledHome>
      <Container h="50vh">
        <div className="row">
          <p>Welcome to Dev-Duel</p>
        </div>
      </Container>
      <Container>
        <Button w="256px" h="81px">
          <Link to="/inspect">INSPECT</Link>
        </Button>
        <Button w="256px" h="81px">
          <Link to="/duel">DUEL</Link>
        </Button>
      </Container>
    </StyledHome>
  );
};

export default Home;
