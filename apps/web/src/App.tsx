// apps/web/src/App.tsx
import { useState } from 'react';
import {
  type Player,
  type Tournament,
  TournamentCategory,
  CourtSurface,
  TournamentStatus,
} from '@twm/shared';
import { Home } from './Home';
import { PlayerList } from './PlayerList';
import { PlayerDetails } from './PlayerDetails';
import { TournamentList } from './TournamentList';
import { TournamentDetails } from './TournamentDetails';

// On définit les types d'onglets possibles pour éviter les fautes de frappe
type Tab = 'home' | 'players' | 'details' | 'tournaments' | 'tournamentDetails';

function App() {
  // Notre système d'onglets de navigation
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedTournament, setSelectedTournament] =
    useState<Tournament | null>(null);

  // Notre fausse liste de joueurs
  const [players] = useState<Player[]>([
    {
      id: '1',
      firstName: 'Roger',
      lastName: 'Federer',
      age: 44,
      country_code: 'CH',
      ranking: 1,
      bot: false,
      manager: {
        pseudo: 'SwissCoach',
        registrationDate: '2025-02-14',
        active: true,
      },
    },
    {
      id: '2',
      firstName: 'Rafael',
      lastName: 'Nadal',
      age: 40,
      country_code: 'ES',
      ranking: 2,
      bot: false,
      manager: {
        pseudo: 'MallorcaAgent',
        registrationDate: '2024-08-01',
        active: false,
      },
    },
    {
      id: '3',
      firstName: 'Novak',
      lastName: 'Djokovic',
      age: 39,
      country_code: 'RS',
      ranking: 3,
      bot: true,
    },
  ]);

  // Quelques tournois d'exemple
  const [tournaments] = useState<Tournament[]>([
    {
      id: 't1',
      name: 'Paris Open',
      city: 'Paris',
      country: 'FR',
      category: TournamentCategory.ATP_500,
      surface: CourtSurface.CLAY,
      status: TournamentStatus.UPCOMING,
      seasonWeek: 20,
      startDate: '2026-05-15',
      endDate: '2026-05-22',
      drawSize: 32,
      totalPrizeMoney: 750000,
      pointsWinner: 500,
    },
    {
      id: 't2',
      name: 'Wimbledon Friendly',
      city: 'London',
      country: 'GB',
      category: TournamentCategory.GRAND_SLAM,
      surface: CourtSurface.GRASS,
      status: TournamentStatus.ONGOING,
      seasonWeek: 28,
      startDate: '2026-07-01',
      endDate: '2026-07-14',
      drawSize: 128,
      totalPrizeMoney: 20000000,
      pointsWinner: 2000,
    },
  ]);

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        backgroundColor: '#fff',
        minHeight: '100vh',
        margin: 0,
      }}
    >
      {/* Super Bannière du Haut */}
      <header
        style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '30px 20px',
          textAlign: 'center',
          backgroundImage: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2.2em', letterSpacing: '1px' }}>
          TENNIS WEB MANAGER 🎾
        </h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.8, fontSize: '1em' }}>
          Managez votre propre académie
        </p>
      </header>

      {/* Barre d'onglets (Navigation) */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
          borderBottom: '1px solid #bdc3c7',
        }}
      >
        <button
          onClick={() => setActiveTab('home')}
          style={{
            padding: '15px 30px',
            fontSize: '1em',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: activeTab === 'home' ? '#3498db' : '#7f8c8d',
            borderBottom:
              activeTab === 'home'
                ? '4px solid #3498db'
                : '4px solid transparent',
            transition: 'all 0.2s ease',
          }}
        >
          Accueil
        </button>
        <button
          onClick={() => setActiveTab('players')}
          style={{
            padding: '15px 30px',
            fontSize: '1em',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: activeTab === 'players' ? '#3498db' : '#7f8c8d',
            borderBottom:
              activeTab === 'players'
                ? '4px solid #3498db'
                : '4px solid transparent',
            transition: 'all 0.2s ease',
          }}
        >
          Liste des Joueurs
        </button>
        <button
          onClick={() => setActiveTab('tournaments')}
          style={{
            padding: '15px 30px',
            fontSize: '1em',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: activeTab === 'tournaments' ? '#3498db' : '#7f8c8d',
            borderBottom:
              activeTab === 'tournaments'
                ? '4px solid #3498db'
                : '4px solid transparent',
            transition: 'all 0.2s ease',
          }}
        >
          Liste des Tournois
        </button>
      </nav>

      {/* Zone d'affichage du contenu dynamique */}
      <main
        style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px' }}
      >
        {activeTab === 'home' ? (
          <Home />
        ) : activeTab === 'players' ? (
          <PlayerList
            players={players}
            onSelectPlayer={(player) => {
              setSelectedPlayer(player);
              setActiveTab('details');
            }}
          />
        ) : activeTab === 'tournaments' ? (
          <TournamentList
            tournaments={tournaments}
            onSelectTournament={(t) => {
              setSelectedTournament(t);
              setActiveTab('tournamentDetails');
            }}
          />
        ) : activeTab === 'tournamentDetails' ? (
          selectedTournament ? (
            <TournamentDetails
              tournament={selectedTournament}
              onBack={() => setActiveTab('tournaments')}
            />
          ) : (
            <div>Tournoi introuvable.</div>
          )
        ) : selectedPlayer ? (
          <PlayerDetails
            player={selectedPlayer}
            onBack={() => setActiveTab('players')}
          />
        ) : (
          <div>Joueur introuvable.</div>
        )}
      </main>
    </div>
  );
}

export default App;
