export type UserType = {
  description: string;
  id: string;
  name: string;
  status: boolean;
};

export type User = {
  id: string;
  accessToken: string;
  email: string;
  firstName: string;
  lastName: string;
  userTypes: UserType[];
};

export type UserListProps = {
  users: User[];
  searchTerm: string;
};
