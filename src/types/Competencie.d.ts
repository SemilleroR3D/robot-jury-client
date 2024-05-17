export type Banners = {
  id: number;
  url: string;
  competitionId: string;
};

export type Competencie = {
  id: string;
  name: string;
  description: string;
  place: string;
  startDate: string;
  registerDeadline: string;
  deadlineUpdate: string;
  status: boolean;
  banners: Banners[];
};
