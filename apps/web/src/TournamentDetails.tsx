import { type Tournament } from '@twm/shared';

interface TournamentDetailsProps {
  tournament: Tournament;
  onBack: () => void;
}

export function TournamentDetails({
  tournament,
  onBack,
}: TournamentDetailsProps) {
  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: '20px',
          padding: '10px 18px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#3498db',
          color: 'white',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        ← Retour aux tournois
      </button>

      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
          padding: '30px',
          maxWidth: '680px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ marginTop: 0, color: '#2c3e50' }}>{tournament.name}</h2>

        <div style={{ marginTop: '20px', lineHeight: 1.8, color: '#34495e' }}>
          <p>
            <strong>Date :</strong> {tournament.startDate} —{' '}
            {tournament.endDate}
          </p>
          <p>
            <strong>Lieu :</strong> {tournament.city}, {tournament.country}
          </p>
          <p>
            <strong>Catégorie :</strong> {tournament.category}
          </p>
          <p>
            <strong>Surface :</strong> {tournament.surface}
          </p>
          <p>
            <strong>Nombre de joueurs :</strong> {tournament.drawSize}
          </p>
          <p>
            <strong>Statut :</strong> {tournament.status}
          </p>
        </div>
      </div>
    </div>
  );
}
