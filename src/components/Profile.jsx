import { ProfileContent, ProfileBox, ProfileCard, ProfileImage, ProfileName, ProfileText, ProfileStats, ListStats, ProfileLabel, ProfileQuantity } from '../styles/Profile.styled.js';
const users = require ('./user.json');

function Profile() {
  return (
    <ProfileContent>
      {users.map((user, index) => (
      <ProfileBox key={index}>
        <ProfileCard key={index}>
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

export default Profile;