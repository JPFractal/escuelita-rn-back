import { Injectable } from "@nestjs/common";
import { Role } from "src/types/role.enum";

export type User = {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  roles: Role[];
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: "asis",
      password: "1234",
      firstName: "Asis",
      lastName: "Melgarejo",
      roles: [Role.Admin],
    },
    {
      userId: 2,
      username: "maria",
      firstName: "Maria",
      lastName: "Beramendi",
      password: "guess",
      roles: [Role.User],
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username == username);
  }
  async getProfile(username: string): Promise<User> {
    const user = this.users.find((user) => user.username == username);
    delete user.password;
    return user;
  }
}
