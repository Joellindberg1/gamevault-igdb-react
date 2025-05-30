import type { ReactNode } from "react";

export type GameCardCategory =
  | 'default'
  | 'favorites'
  | 'owned'
  | 'search';

export interface GameCardData {
  // API-data
  id: number;
  name: string;
  cover?: { url: string };
  popularity?: number;
  follows?: number;
  hypes?: number;
  total_rating?: number;
  rating_count?: number;

  // Tilläggsstatus
  favorite?: boolean;
  isOwned?: boolean;

  // UI-kategori för hur kortet ska visas
  category: GameCardCategory;
}

// Add a separate props type for the card component:
export interface GameCardBaseProps {
  game: GameCardData;
  children?: ReactNode;
}
