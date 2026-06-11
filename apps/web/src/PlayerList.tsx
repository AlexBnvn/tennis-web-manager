// apps/web/src/PlayerList.tsx
import { type Player } from '@twm/shared';

interface PlayerListProps {
  players: Player[];
  onSelectPlayer: (player: Player) => void;
}

export function PlayerList({ players, onSelectPlayer }: PlayerListProps) {
  // On trie les joueurs par classement (ranking) pour s'assurer que le tableau est juste
  const sortedPlayers = [...players].sort((a, b) => a.ranking - b.ranking);

  return (
    <div style={{ padding: '20px', overflowX: 'auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>
        Liste des joueurs
      </h2>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: 'sans-serif',
          fontSize: '14px',
          textAlign: 'left',
        }}
      >
        <thead>
          <tr
            style={{
              borderBottom: '2px solid #eaeaea',
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            <th style={{ padding: '12px 8px', width: '50px' }}>#</th>
            <th style={{ padding: '12px 8px' }}>Nom</th>
            <th style={{ padding: '12px 8px', width: '140px' }}>Pays</th>
            <th
              style={{ padding: '12px 8px', textAlign: 'right', width: '60px' }}
            >
              Age
            </th>
            <th
              style={{
                padding: '12px 8px',
                textAlign: 'right',
                width: '100px',
              }}
            >
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => {
            // Petite astuce pour alterner les couleurs de fond une ligne sur deux (effet zèbre)
            const isEven = index % 2 === 1;

            return (
              <tr
                key={player.id}
                onClick={() => onSelectPlayer(player)}
                style={{
                  backgroundColor: isEven ? '#f9f9f9' : '#fff',
                  borderBottom: '1px solid #eee',
                  cursor: 'pointer',
                }}
              >
                {/* Colonne Position # */}
                <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>
                  {player.ranking}.
                </td>

                {/* Colonne Nom et Nationalité */}
                <td
                  style={{
                    padding: '12px 8px',
                    color: '#2c3e50',
                    fontWeight: '500',
                  }}
                >
                  <span
                    style={{ marginRight: '8px', opacity: 0.8 }}
                    title={player.country_code}
                  >
                    🏳️{' '}
                    {/* On mettra de vrais drapeaux plus tard, pour l'instant un emoji fait le job */}
                  </span>
                  {player.lastName}, {player.firstName}
                </td>

                {/* Colonne Pays */}
                <td
                  style={{
                    padding: '12px 8px',
                    color: '#2c3e50',
                    fontWeight: '500',
                  }}
                >
                  {player.country_code}
                </td>

                {/* Colonne Âge (Grisé et aligné à droite comme sur ton screen) */}
                <td
                  style={{
                    padding: '12px 8px',
                    textAlign: 'right',
                    color: '#7f8c8d',
                  }}
                >
                  {player.age}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
