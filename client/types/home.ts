export interface TitleProps {
  title: string;
  description: string;
}

interface CardData {
  image: string;
  name: string;
  handle: string;
}

export interface CreateCardProps {
  card: CardData;
}