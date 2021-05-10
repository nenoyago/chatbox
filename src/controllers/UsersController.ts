import { Request, Response } from 'express';

import { UsersService } from '../services/UsersService';

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    try {
      const usersService = new UsersService();

      const users = await usersService.create(email);

      return response.status(201).json(users);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }

  }
}

export { UsersController };