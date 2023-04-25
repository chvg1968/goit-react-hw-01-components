import { ProfileContent, ProfileBox, ProfileCard, ProfileImage, ProfileName, ProfileText, ProfileStats, ListStats, ProfileLabel, ProfileQuantity } from '../styles/Profile.styled.js';
import PropTypes from 'prop-types';
const users = require ('./user.json');

function Profile() {
  return (
    <ProfileContent>
      {users.map((user, index) => (
      <ProfileBox key={index}>
        <ProfileCard >
          <ProfileImage src={user.avatar} alt="avatar" className="avatar"/>
          <ProfileName>{user.username}</ProfileName>
          <ProfileName>@{user.tag}</ProfileName>
          <ProfileText>{user.location}</ProfileText>
        </ProfileCard> 
          
        <ProfileStats key={index}>
            <ListStats>
            <ProfileLabel>Followers</ProfileLabel>
            <ProfileQuantity><b>{user.stats.followers.toLocaleString()}</b></ProfileQuantity>
            </ListStats>

            <ListStats>
            <ProfileLabel>Views</ProfileLabel>
            <ProfileQuantity><b>{user.stats.views.toLocaleString()}</b></ProfileQuantity>
            </ListStats>

            <ListStats>
            <ProfileLabel>Likes</ProfileLabel>           
            <ProfileQuantity><b>{user.stats.likes.toLocaleString()}</b></ProfileQuantity>
            </ListStats>

        </ProfileStats> 

      </ProfileBox>   
      ))}
    </ProfileContent>
  );
}

Profile.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }).isRequired
  })).isRequired
};

export default Profile;