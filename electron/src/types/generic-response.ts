export type GenericResponse = {
    success: boolean,
    data?: {
        token?: string,
        users?: {}[],
        futureUsers?: {}[],
        cars?: {}[],
    },
    message: string,
};