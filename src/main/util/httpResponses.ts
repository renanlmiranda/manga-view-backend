import { IResponse } from "../../controller/interfaces";

export default {
    created: (data?: any): IResponse => ({
        statusCode: 201,
        body: data,
    }),

    ok: (data?: any): IResponse => ({
        statusCode: 200,
        body: data,
    }),

    badRequest: (data: any): IResponse => ({
        statusCode: 400,
        body: data,
    }),

    notFound: (): IResponse => ({
        statusCode: 404,
    }),

    serverError: (data: any): IResponse => ({
        statusCode: 500,
        body: data,
    }),
};
