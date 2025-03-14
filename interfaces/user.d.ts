export interface User {
  username: string;
  password: string;
  email: string;
}

export interface DbUser extends User {
  id: number;
}

export interface InsertUser extends User {}

export interface UpdateUser {
  id: number;
  username?: string;
  password?: string;
  email?: string;
}

export interface DeleteUser {
  id: number;
}
