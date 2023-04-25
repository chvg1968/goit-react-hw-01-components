import React from 'react';
import { Container, Card, CardAvatar, CardStatus, CardName  } from '../styles/Friends.styled';
import PropTypes from 'prop-types';
const friends =  require ('./friends.json') ;


function Friends (){
    return (
        <Container >
            {friends.map((friend) => (
            <Card key={friend.id}>
                <CardStatus>{friend.isOnline? 
                <span><CardStatus style={{ backgroundColor: 'green' }} /></span> 
                : 
                <span><CardStatus style={{ backgroundColor: 'red' }}/></span>}</CardStatus>
                <CardAvatar src={friend.avatar} alt="User avatar"  />
                <CardName>{friend.name}</CardName>
            </Card>
            ))}
        </Container>
    )
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };
  

export default Friends;
