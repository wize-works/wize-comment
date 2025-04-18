export interface Context {
    user: {
        id: string;
    };
    tenantId: string;
    scopes: string[];
}