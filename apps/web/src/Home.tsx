// apps/web/src/Home.tsx
export function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Bienvenue sur Tennis Web Manager ! 🏆</h2>
      <p
        style={{
          color: '#666',
          maxWidth: '550px',
          margin: '20px auto',
          lineHeight: '1.6',
        }}
      >
        Prenez les commandes de votre propre circuit. Gérez vos joueurs,
        planifiez vos tournois et grimpez au sommet du classement mondial.
      </p>
      <div
        style={{
          display: 'inline-block',
          padding: '15px 25px',
          backgroundColor: '#2ecc71',
          color: 'white',
          borderRadius: '20px',
          fontWeight: 'bold',
        }}
      >
        Saison 2026 — En cours 🎾
      </div>
    </div>
  );
}
