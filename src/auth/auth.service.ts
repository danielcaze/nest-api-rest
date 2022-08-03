import { Injectable } from "@nestjs/common";
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})

export class AuthService {
    constructor(private prisma: PrismaService) { }
    login() { };
    signup() {
        return { msg: 'Hello I have signed up!' }
    };
    signin() {
        return { msg: 'Hello I have signed in!' }
    };
};