const User=require('../modele/user')

const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');

require('dotenv').config()


exports.createUser= async(req,res)=>{
    const {nom,prenom,email,password,role}=req.body
  

  const result= await User.findOne({where: {email:(email)}})
    if(result){
     return res.status(400).json("erreur :email déja exstant")
    
    }else{
           const haspassword=await bcrypt.hash(password,10)
           await User.create({nom:nom,prenom:prenom,email:email,password:haspassword,role:role})
           
           return res.status(400).json("creation reussi ")
    }
 

}






exports.login= async(req,res)=>{
    const {email,password}=req.body
let etat
 const result= await User.findOne({where: {email:(email)}})
if(!result){
    etat="Login"
 return res.status(400).json(false)

}

//bcrypt.compare

const passwordTrue=await bcrypt.compare(password,result.password)

console.log(passwordTrue);

if(!passwordTrue){
     etat="Login"
 return res.status(400).json(false)


}
etat="Logout"
const token= jwt.sign({email},process.env.API_KEY,{expiresIn:'1h'})
res.json({token,etat})


}



exports.authenticator=async(req,res,next)=>{

    const token=req.body.token ? req.body.token : req.headers.authorization
    
    if(token){
       let decoded= jwt.verify(token, process.env.API_KEY)
        console.log(decoded)
       if(decoded){
            next()
       }else{
        return res.status(401).json("unauthorize")
       }

    }else{
        return res.status(401).json("unauthorize")
       }

}




exports.Admin_OR_NOT=async(req,res,next)=>{
    const token=req.body.token ? req.body.token : req.headers.authorization
console.log(req.body)
     jwt.verify(token, process.env.API_KEY, async(err, decoded)=>{
        if(err){    
            return res.status(401).json("unauthorize") 
        }
        else{
            const result= await User.findOne({where: {email:(decoded.email)}})
            console.log(result.role);
            let role=  result.role;

            if(role.toLowerCase() === "admin"){
                next()
            }
            else{
                return res.status(401).json("Vous n'avez pas le bonr role") 
            }
        }
     })



    }