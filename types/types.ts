export type RouteType = `${string}/${string}`;

export type RoutesType = {
    users: RouteType;
}

export type TVariables = {
    api: {
        port: number;
        baseUrl: string;
    }
}