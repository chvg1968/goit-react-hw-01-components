import React from 'react';
import { Container, Card, CardAvatar, CardStatus, CardName  } from '../styles/Friends.styled'
const friends =  require ('./friends.json') ;


function Friends (){
    return (
        <Container >
            {friends.map((friend) => (
            <Card key={friend.id}>
                <CardStatus>{friend.isOnline? 
                <span><CardStatus style={{ color: 'green' }} />1</span> 
                : 
                <span><CardStatus style={{ color: 'red' }}/>2</span>}</CardStatus>
                <CardAvatar src={friend.avatar} alt="User avatar" width="48" />
                <CardName>{friend.name}</CardName>
            </Card>
            ))}
        </Container>
    )
}

export default Friends;
