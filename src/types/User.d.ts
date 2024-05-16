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

export type UserTypeListProps = {
  roles: UserType[];
};

export enum Sex {
  Male,
  Female
}

export type UserFetch = {
  id: string,
  firstName: string,
  lastName: string,
  birthDate: Date,
  sex: Sex,
  phone: string,
  email: string,
  userTypes: UserType[]
}

export type UserListProps = {
  users: UserFetch[];
};

export interface UserRoleDialogProps {
  open: boolean;
  onClose: () => void;
  userId: string | null;
}

export type UserTypeUser = {
  userId: string | null;
  userTypeId: string | null;
};
