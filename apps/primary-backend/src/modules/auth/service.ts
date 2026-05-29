export abstract class AuthService{
    static async signup(username: string , password: string): Promise<string> {
            return "123"
    } //promise<string> means eventually return a string
    static async signin(username: string, password:string): Promise<string>{
            return "token-123"
    }
}