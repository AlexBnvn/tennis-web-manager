import { type Tournament } from '@twm/shared';

interface TournamentListProps {
  tournaments: Tournament[];
  onSelectTournament: (t: Tournament) => void;
}

export function TournamentList({
  tournaments,
  onSelectTournament,
}: TournamentListProps) {
  const sorted = [...tournaments].sort((a, b) =>
    a.startDate.localeCompare(b.startDate)
  );

  return (
    <div style={{ padding: '20px', overflowX: 'auto' }}>
      <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>
        Liste des tournois
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
            <th style={{ padding: '12px 8px', width: '140px' }}>Date</th>
            <th style={{ padding: '12px 8px' }}>Nom</th>
            <th style={{ padding: '12px 8px', width: '120px' }}>Catégorie</th>
            <th style={{ padding: '12px 8px', width: '100px' }}>Surface</th>
            <th
              style={{
                padding: '12px 8px',
                textAlign: 'right',
                width: '100px',
              }}
            >
              Joueurs
            </th>
            <th style={{ padding: '12px 8px', width: '120px' }}>Statut</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((t) => (
            <tr
              key={t.id}
              onClick={() => onSelectTournament(t)}
              style={{
                backgroundColor: '#fff',
                borderBottom: '1px solid #eee',
                cursor: 'pointer',
              }}
            >
              <td style={{ padding: '12px 8px' }}>{t.startDate}</td>
              <td
                style={{
                  padding: '12px 8px',
                  color: '#2c3e50',
                  fontWeight: 500,
                }}
              >
                {t.name}
              </td>
              <td style={{ padding: '12px 8px' }}>{t.category}</td>
              <td style={{ padding: '12px 8px' }}>{t.surface}</td>
              <td
                style={{
                  padding: '12px 8px',
                  textAlign: 'right',
                  color: '#7f8c8d',
                }}
              >
                {t.drawSize}
              </td>
              <td style={{ padding: '12px 8px' }}>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
