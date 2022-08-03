import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

// if we do a post request we're going to use '/auth'
@Controller('auth')

export class AuthController {
    // private is for not using "this." and declare the variable defore. its a shorthand
    constructor(private authService: AuthService) { };

    @Post('signup')
    signup() {
        return this.authService.signin();
    };
    //se eu entrar em /auth/{signup ou signin} 
    @Post('signin')
    signin() {
        return this.authService.signin();
    };
};