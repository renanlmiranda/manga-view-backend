import responses from "../main/util/httpResponses";
import { IRequest, IResponse } from "./interfaces";

export default class UserController {
    async createUser(request: IRequest): Promise<IResponse> {
        try {
            return responses.created();
        } catch (error) {
            return responses.serverError(error);
        }
    }
}
