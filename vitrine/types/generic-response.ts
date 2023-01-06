export type GenericResponse = {
    success: boolean,
    data?: {
        token?: string,
    },
    message: string,
};