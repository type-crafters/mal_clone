import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

(async () => {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 3000;

    await app.listen(port, () => console.log("App listening at http://127.0.0.1:%i/", port));
})();