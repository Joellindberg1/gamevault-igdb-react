export interface GameCard {
    id: number;
    name: string;
    cover?: {
      url: string;
    };
  
    // Valfria datafält som kan användas beroende på sektion
    total_rating?: number;
    rating_count?: number;
    popularity?: number;
    follows?: number;
    hypes?: number;
  }
  