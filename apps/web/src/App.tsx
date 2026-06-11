import { useState } from 'react';
// On importe le type Player créé dans l'autre dossier !
import { type Player } from '@twm/shared';

function App() {
  // Une fausse liste de joueurs pour tester l'affichage
  const [players] = useState<Player[]>([
    {
      id: '1',
      firstName: 'Roger',
      lastName: 'Federer',
      age: 44,
      country_code: 'Suisse',
      ranking: 1,
    },
    {
      id: '2',
      firstName: 'Rafael',
      lastName: 'Nadal',
      age: 40,
      country_code: 'Espagne',
      ranking: 2,
    },
    {
      id: '3',
      firstName: 'Novak',
      lastName: 'Djokovic',
      age: 39,
      country_code: 'Serbie',
      ranking: 3,
    },
  ]);

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1>Tennis Web Manager 🎾</h1>
      <h2>Liste des Joueurs</h2>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {players.map((player) => (
          <li
            key={player.id}
            style={{
              padding: '15px',
              marginBottom: '10px',
              backgroundColor: '#f4f4f4',
              borderRadius: '8px',
              borderLeft: '5px solid #3498db',
            }}
          >
            <strong>
              {player.firstName} {player.lastName}
            </strong>{' '}
            <br />
            <small>
              Âge : {player.age} ans | Pays : {player.country_code} | Rang : #
              {player.ranking}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
