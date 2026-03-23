import jwt from "jsonwebtoken";

const isAuth = async (req , res , next) => {
    try {
        let {token} = req.cookies;
        if(!token){  // means user is not login 
            return res.status(400).json({message:"Token is not found"});
        }
        let verifyToken = jwt.verify(token , process.env.JWT_SECRET);
         
        if(!verifyToken){
            return res.status(400).json({message:"user does not have valid token"});
        }
        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        return res.status(500).json({message:`something went wrong at isAuth middleware ${error}`});
    }
}

export default isAuth

// we can use this middleware to check if the user is logged in or not in between the routes means if we want to extract the getprofile then we can use this middleware to check if the user is logged in or not 
// in this way        app.get("/api/user/profile", isAuth, getProfile);