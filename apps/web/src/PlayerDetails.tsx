import { type Player } from '@twm/shared';

interface PlayerDetailsProps {
  player: Player;
  onBack: () => void;
}

export function PlayerDetails({ player, onBack }: PlayerDetailsProps) {
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
        ← Retour à la liste
      </button>

      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
          padding: '30px',
          maxWidth: '560px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ marginTop: 0, color: '#2c3e50' }}>Détails du joueur</h2>

        <div style={{ marginTop: '20px', lineHeight: 1.8, color: '#34495e' }}>
          <p>
            <strong>Nom :</strong> {player.lastName}, {player.firstName}
          </p>
          <p>
            <strong>Pays :</strong> {player.country_code}
          </p>
          <p>
            <strong>Age :</strong> {player.age}
          </p>
          <p>
            <strong>Bot :</strong> {player.bot ? 'Oui' : 'Non'}
          </p>

          {player.manager ? (
            <div style={{ marginTop: '18px' }}>
              <h3 style={{ marginBottom: '10px', color: '#2c3e50' }}>
                Manager
              </h3>
              <p>
                <strong>Pseudo :</strong> {player.manager.pseudo}
              </p>
              <p>
                <strong>Date d'inscription :</strong>{' '}
                {player.manager.registrationDate}
              </p>
              <p>
                <strong>Actif :</strong> {player.manager.active ? 'Oui' : 'Non'}
              </p>
            </div>
          ) : (
            <p style={{ marginTop: '18px' }}>
              <strong>Manager :</strong> Aucun manager assigné.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
