import { CourtSurface } from '../enums/courtSurface';
import { TournamentCategory } from '../enums/tournamentCategory';
import { TournamentStatus } from '../enums/tournamentStatus';

export interface Tournament {
  id: string; // UUID unique pour la base de données
  name: string; // Nom du tournoi (ex: "Paris Open")
  city: string; // Ville où il se déroule
  country: string; // Code pays (ex: "FR", "US")

  category: TournamentCategory;
  surface: CourtSurface;
  status: TournamentStatus;

  // --- Calendrier ---
  seasonWeek: number; // Semaine de la saison (1 à 52) pour planifier l'année
  startDate: string; // Format ISO string (AAAA-MM-JJ)
  endDate: string; // Format ISO string (AAAA-MM-JJ)

  // --- Caractéristiques du Tableau ---
  drawSize: 16 | 32 | 64 | 128; // Nombre de joueurs max dans le tableau principal

  // --- Récompenses (Économie & Classement du jeu) ---
  totalPrizeMoney: number; // Dotation totale (ex: 2500000)
  pointsWinner: number; // Points attribués au vainqueur (ex: 2000)

  // --- Données dynamiques (Optionnel selon l'avancement) ---
  currentRound?: string; // ex: "R16", "QUARTER_FINAL", "FINAL"
  winnerId?: string | null; // ID du joueur qui a gagné à la fin du tournoi
}
