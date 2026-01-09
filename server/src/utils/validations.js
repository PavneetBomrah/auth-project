import { z } from 'zod'

export const registerValidation = z.object({
    name: z.string().min(3,"Name Too Short"),
    email: z.string().email("Invalid Email"),
    password: z.string().min(6,"Password should be atleast 6 characters")
}) 

export const loginValidation = z.object({
    email: z.string().email("Invalid Email"),
    password: z.string().min(6,"Password should be atleast 6 characters")
})