export type Rol = {
    description: string;
    id: string;
    name: string;
    status: boolean;
  };

export type User = {
    accessToken: string;
    email: string;
    firstName: string;
    lastName: string;
    rol: Rol | null;
  };
