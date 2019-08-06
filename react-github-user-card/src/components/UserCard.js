import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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
    <Card>
      <Image src={avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="login">{login}</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )
}
