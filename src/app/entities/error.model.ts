export interface ErrorInterface {
    code: number;
    msg: string;
}

export class ErrorModel implements ErrorInterface {
    code: number;
    msg: string;

    constructor(code?: number, msg?: string ){
        this.code = code;
        this.msg = msg;
    }
}

export function errorFactory(iError: ErrorInterface): ErrorModel{
    return new ErrorModel(iError.code, iError.msg)
}