export interface AuthContext {  // maybe call this AuthContext
    user: {
        id: string;
    };
    tenantId: string;
    scopes: string[];
}