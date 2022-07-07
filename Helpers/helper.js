import { client } from "../index.js";




  
export  async function GetUserByID(id) {
  console.log(id)
    return await client.db("task").collection("user").findOne({ id: id});
  }
  
export async function GetAllUsers() {
    return await client.db("task").collection("user").find({}).toArray();
  }

