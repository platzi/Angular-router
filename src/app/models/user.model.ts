export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'customer' | 'admin';
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
