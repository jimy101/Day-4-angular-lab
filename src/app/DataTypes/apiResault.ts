export interface APIResult<Type>{
data:Type;
success:boolean;
message:string;
status:number
}