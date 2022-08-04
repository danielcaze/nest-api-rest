import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
@Injectable()

export class AuthService {
    constructor(private prisma: PrismaService) { }
    login() { };
    async signup(dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password);
        //save the new user in the DB
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                },
            });

            delete user.hash;
            // return the saved user
            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // code for duplicated values
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken')
                }
            };
        };

    };

    async signin(dto: AuthDto) {
        // find user by email
        const user = await this.prisma.user.findFirst({
            where: {
                email: dto.email,
            },
        });

        // if the user dont exists throw exception
        if (!user) {
            throw new ForbiddenException('Credentials Incorrect')
        }

        //compare password
        const passMatches = await argon.verify(user.hash, dto.password);

        // if password is incorrect throw exception
        if (!passMatches) {
            throw new ForbiddenException('Credentials Incorrect')
        }

        delete user.hash

        // send back the user
        return user
    };
};