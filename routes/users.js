import express  from "express";
import {
    GetUserByID,
    GetAllUsers
} from "../Helpers/helper.js"

const router = express.Router();





  router.get('/', async (request, response) => {
    console.log(request.query)
   
    
  
  const users= await GetAllUsers();
  
     
      response.send(users)
   
  })
  
 
  
  router.get('/:id', async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    
    
    const user = await GetUserByID(id);
  
    
    user ? response.send(user) : response.status(404).send({message: "no matching user found"})
    
  })
  
 
  

 

  export const tasksRouter = router;