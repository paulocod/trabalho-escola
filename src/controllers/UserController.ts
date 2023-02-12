import { Request, Response } from "express";

export class UserController {
  async create(req: Request, res: Response) {
    console.log("entrou no userController");
    const { name, email, password } = req.body;
    console.log(name);

    return res.status(200).json({ name, email });
  }
}
