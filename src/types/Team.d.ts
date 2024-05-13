export type Team = {
  id: string;
  name: string;
  description: string;
  img: string;
  video: string;
  status: string
};

export interface TeamListProps {
  teams: Team[];
}
