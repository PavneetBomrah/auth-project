import User from '../models/User.js'
import { loginValidation, registerValidation } from '../utils/validations.js'

export async function register(req, res) {

        const parsed = registerValidation.safeParse(req.body)
        if(!parsed.success){
            return res.status(403).json({
                message: parsed.error.issues[0].message
            })
        }
        
        return res.status(200).json({ message:"Success"} )
}
export async function login(req, res) {
    
}
export async function logout(req, res) {
    
}