import Card from "../Card/Card";

const Winner = (props) => {
  const user1Data = props.user1;
  const user2Data = props.user2;

  const renderWinner = () => {
    if (user1Data && user2Data) {
      if (user1Data.followers > user2Data.followers) {
        return `${user1Data.username} has more followers!`;
      } else if (user2Data.followers > user1Data.followers) {
        return `${user2Data.username} has more followers!`;
      } else {
        return "It is a tie!";
      }
    }
    return null;
  };

  return (
    <Card bg="#ebebd3" b="1px solid #333" br="50px" c="#000" h="10vh" w="70vw">
      <div className="is-size-3	has-text-weight-bold">{renderWinner()}</div>
    </Card>
  );
};

export default Winner;
