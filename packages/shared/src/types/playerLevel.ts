export interface PlayerLevel {
  // --- Core Tennis Skills (Caractéristiques de Tennis) ---
  forehand_backhand: number; // Coup droit et Revers
  serve: number; // Service
  return: number; // Retour de service
  volley: number; // Volée
  stamina: number; // Résistance / Endurance
  movement: number; // Déplacement / Vitesse
  power: number; // Puissance
  spin: number; // Effet (Topspin/Slice)

  // --- Level Surface Proficiencies (Niveau par Surface) ---
  clayLevel: number; // Niveau sur Terre battue
  grassLevel: number; // Niveau sur Gazon
  hardLevel: number; // Niveau sur Surface dure

  // --- Condition & Psychology (Mental & Forme) ---
  mental: number; // Force mentale / Gestion de la pression
  fitness: number; // État de forme physique du moment
}
