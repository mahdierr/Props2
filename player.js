// src/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, number, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {team}
        </Card.Text>
        <Card.Text>
          <strong>Nationalité:</strong> {nationality}
        </Card.Text>
        <Card.Text>
          <strong>Numéro:</strong> {number}
        </Card.Text>
        <Card.Text>
          <strong>Âge:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: 'Nom non défini',
  team: 'Équipe non définie',
  nationality: 'Nationalité non définie',
  number: 'Numéro non défini',
  age: 'Âge non défini',
  imageUrl: 'https://via.placeholder.com/150'
};

export default Player;
