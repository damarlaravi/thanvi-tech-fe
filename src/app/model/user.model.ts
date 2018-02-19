export interface UserModel {
    id: string;
    username: string;
    email: string;
    dob: Date;
    token_create_date: Date;
    token_expiration_date: Date;
    token: string;
}
