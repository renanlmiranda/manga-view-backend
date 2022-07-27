import { Request, Response } from "express";

import { IRequest } from "../../controller/interfaces";

export const adaptRoute = (controller: any) => {
    return async (req: Request, res: Response) => {
        const httpRequest: IRequest = {
            body: req.body,
            params: req.params,
            query: req.query,
            headers: req.headers,
        };
        const httpResponse = await controller(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
