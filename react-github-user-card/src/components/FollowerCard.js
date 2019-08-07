import React from 'react'
import { Button, Card, Image, Icon } from 'semantic-ui-react'

import '../stylesheets/followercard.css'

export default function FollowerCard({ follower, user, handleClick }) {
  console.log('FollowerCard Props: ', follower, user)
  const { avatar_url, login } = follower

  return (
    <Card raised>
      <Card.Content textAlign="left">
        <Image floated="right" size="mini" src={avatar_url} />
        <Card.Header>{login}</Card.Header>
        <Card.Meta>{`Friends of ${user}`}</Card.Meta>
      </Card.Content>
      <Card.Content className="fc-extra" extra>
        <Button animated color="blue" onClick={login => handleClick()}>
          <Button.Content visible>
            <Icon color="white" name="github" />
          </Button.Content>
          <Button.Content hidden>Get User Card</Button.Content>
        </Button>
      </Card.Content>
    </Card>
  )
}
