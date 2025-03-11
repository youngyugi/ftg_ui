export interface User {
  username: string;
  password: string;
  email: string;
}

export interface DbUser extends User {
  id: number;
}

export interface InsertUser extends User {}

export interface UpdateUser extends User {
  id: number;
}

export interface DeleteUser {
  id: number;
}
