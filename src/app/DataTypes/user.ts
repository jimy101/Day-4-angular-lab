export interface IRegisterUser{
    email : string,
    name : string,
    password : string,
    phoneNumber: string
}
export interface IStoredUser{
    email : string,
    name : string,
    token : string,
    phoneNumber: string
}
export interface ILoginUser{
    email : string,
    password : string,
}