import { Elysia } from "elysia";
import { app as authApp } from "./modules/auth";

const app = new Elysia().use(authApp).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

/*
auth => signup, signin 
api-key => cretae api keys , get api keys,delete api keys,disable api keys 
model=> get all the supported model , their pricing ,provider etc
payment  => rzp/stripe


*/