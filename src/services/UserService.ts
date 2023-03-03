import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserProps {
  name: string;
  email: string;
  password: string;
}

export class UserService {
  async createUserService({ name, email, password }: UserProps) {
    if (!email) {
      throw new Error("Email is required");
    }
    const emailExists = await prisma.user.findFirst({
      where: { email: email },
    });

    if (emailExists) {
      throw new Error("Esse email ja esta cadastrado");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }
  async allUsersService() {
    const users = await prisma.user.findMany();
    if (!users) {
      return "Não existe nenhum usuario no banco de dados";
    }
    return users;
  }
}
