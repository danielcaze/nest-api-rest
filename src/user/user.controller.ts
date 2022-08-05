import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
    //if you leave the decorator blank it will catch anything in the /user/any 
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@Req() req: Request) {
        return req.user
    }
}
