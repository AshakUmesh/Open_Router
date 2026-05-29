import { t } from 'elysia'

export namespace AuthModel {
    export const signinSchema = t.Object({
        email: t.String(),//both feild must exist and be string
        password: t.String()})

        export type signInSchema = typeof signinSchema.static

        export const signinResponseSchema = t.Object({
            token : t.String(),

        })

        export type signInResponseSchema = typeof signinResponseSchema.static;
//export if correct credentials 
        export const signinFailureSchema = t.Object({
            message: t.Literal("Incorrect credentials")
        }) 

        export type signInFailureSchema = typeof signinFailureSchema.static;

        export const signupSchema = t.Object({
            email: t.String(),
            password: t.String()})
    
            export type signUpSchema = typeof signupSchema.static
    
            export const signupResponseSchema = t.Object({
                id : t.String(),
    
            })
            
            export const signupFailedResponseSchema = t.Object({
                message: t.Literal("Error while signing up")
            })

            export type signUpResponseSchema = typeof signupResponseSchema.static;
            export type signUpFailedResponseSchema = typeof signupFailedResponseSchema.static;


}
