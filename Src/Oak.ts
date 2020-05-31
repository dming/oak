import { Application } from "./Application.ts";


export class Oak {

    private app: Application | undefined;

    getApp(): Application {
        const app = new Application();
        this.app = app;
        return app;
    }
}

export const oak = new Oak();


