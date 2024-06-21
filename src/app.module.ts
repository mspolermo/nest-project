import { Module } from "@nestjs/common";
import { AppController } from "./app.conroller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'nest-project',
            models: [],
            autoLoadModels: true
        }),
    ]
})
export class AppModule {}