import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

// decorator is a function that adds metadada to the current class
// criar um modulo com a CLI do nest: "nest g module {moduleName}"
@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
})

export class AppModule { };