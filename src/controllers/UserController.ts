import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  async create(req: Request, res: Response) {
    console.log("entrou no userController");
    const { name, email, password } = req.body;

    const service = new UserService();
    const user = await service.createUserService({ name, email, password });
    console.log(user);

    return res.status(200).json({ name, email });
  }
}
