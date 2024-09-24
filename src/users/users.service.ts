import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO) {
    const user = await this.findUserByEmail(data.email);

    if (user) {
      throw new BadRequestException('E-mail already in use.');
    }

    data.password = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({ data });
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email } });
  }
}
