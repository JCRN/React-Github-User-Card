import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import '../stylesheets/usercard.css'

export default function UserCard({ user }) {
  console.log('UserCard', user)
  const {
    avatar_url,
    name,
    login,
    location,
    html_url,
    followers,
    following,
    bio
  } = user

  return (
    <Card className="user-card" raised>
      <Image src={avatar_url} wrapped ui={false} />
      <Card.Content textAlign="left">
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="login">{login}</span>
        </Card.Meta>
        <Card.Description
          as="p"
          className="location">{`Location:  ${location}`}</Card.Description>
        <Card.Description as="p" className="profile">
          {html_url}
        </Card.Description>
        <Card.Description as="p" className="bio">
          {bio}
        </Card.Description>
      </Card.Content>
      <Card.Content className="followers" textAlign="left" extra>
        <a>
          <Icon name="user" />
          {`${followers} Followers`}
        </a>
        <a>
          <Icon name="user" />
          {`Following ${following}`}
        </a>
      </Card.Content>
    </Card>
  )
}
