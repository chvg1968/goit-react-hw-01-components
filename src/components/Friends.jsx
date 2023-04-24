import React from 'react';
import { Container, Card, CardAvatar, CardStatus, CardName  } from '../styles/Friends.styled'
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
                <CardAvatar src={friend.avatar} alt="User avatar" width="48" />
                <CardName>{friend.name}</CardName>
            </Card>
            ))}
        </Container>
    )
}

export default Friends;
