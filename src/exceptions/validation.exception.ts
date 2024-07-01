import { HttpException, HttpStatus } from "@nestjs/common";


export class ValidationException extends HttpException {
    messges;

    constructor (response) {
        super(response, HttpStatus.BAD_REQUEST);
        this.messges = response;
    }
}