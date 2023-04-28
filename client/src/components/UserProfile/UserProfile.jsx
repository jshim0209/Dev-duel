import styled from "styled-components";
import Card from "../Card/Card";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserProfile = (props) => {
  const userData = { ...props.data };
  console.log(props);

  // let userLoacation = (props) => {
  //   props.data.location = props.data.location = null
  //     ? "N/A"
  //     : props.data.location;
  // };

  // const joinTitle = (props) => {
  //   props.data.titles = props.data.titles.join(", ");
  // };

  return (
    <Card bg="#ebebd3" b="3px solid #333" br="50px" c="#000" h="70vh" w="40vw">
      <StyledProfile>
        <figure className="image is-128x128">
          <img
            src={userData.avatar_url}
            alt="profilePic"
            className="is-rounded"
          />
        </figure>
        <div className="has-text-weight-bold">{userData.bio}</div>
      </StyledProfile>
      <StyledUserInfo>
        <div className="content">
          <ul>
            <li>Username: {userData.username}</li>
            <li>Name: {userData.name}</li>
            <li>Location: {userData.location}</li>
            <li>Titles: {userData.titles}</li>
            <li>Favorite-language: {userData["favorite-language"]}</li>
            <li>Total-stars: {userData["total-stars"]}</li>
            <li>Highest-starrd: {userData["highest-starred"]}</li>
            <li>Public-repos: {userData["public-repos"]}</li>
            <li>Perfect-repos: {userData["perfect-repos"]}</li>
            <li>Followers: {userData.followers}</li>
            <li>Following: {userData.following}</li>
          </ul>
        </div>
      </StyledUserInfo>
    </Card>
  );
};

export default UserProfile;
