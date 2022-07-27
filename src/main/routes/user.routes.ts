import { Router } from "express";

import Controller from "../../controller/user.controller";

export default (router: Router): void => {
    const userController = new Controller();

    router.post("/users");
};
