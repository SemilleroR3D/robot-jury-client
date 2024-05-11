export type Rol = {
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
  rol: Rol | null;
};

export type UserListProps = {
  users: User[];
  searchTerm: string;
};
