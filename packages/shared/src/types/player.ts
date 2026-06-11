import { type Manager } from './manager';
import { PlayerLevel } from './playerLevel';

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  country_code: string;
  ranking: number;
  bot: boolean;
  manager?: Manager;
  level?: PlayerLevel;
}
