import axios, { AxiosResponse } from 'axios';

interface User {
  id: number;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
}

export const getUsers = (): Promise<AxiosResponse<User[]>> => {
  return axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
};
