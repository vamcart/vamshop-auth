import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string({
        invalid_type_error: "Must be an email string"
    }).email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
})

export const ResetSchema = z.object({
    email: z.string({
        invalid_type_error: "Must be an email string"
    }).email({
        message: "Email is required"
    }),
})

export const RegisterSchema = z.object({
    email: z.string({
        invalid_type_error: "Must be an email string"
    }).email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    }),
    name: z.string().min(1, {
        message: "Name is required",
    })
})