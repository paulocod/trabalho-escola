import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UserService } from "../services/UserService";

export class UserController {
  async create(req: Request, res: Response) {
    console.log("entrou no userController");
    const { name, email, password } = req.body;

    const service = new UserService();
    await service.createUserService({ name, email, password });

    return res.status(200).json({ name, email });
  }
  async allUsers(req: Request, res: Response) {
    const service = new UserService();
    const allUsers = await service.allUsersService();

    return res.status(200).json({ allUsers });
  }
}
