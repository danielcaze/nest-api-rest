import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

// if we do a post request we're going to use '/auth'
@Controller('auth')

export class AuthController {
    // private is for not using "this." and declare the variable defore. its a shorthand
    constructor(private authService: AuthService) { };

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    };

    //se eu entrar em /auth/{signup ou signin} 
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    };
};