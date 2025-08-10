import mongoose from "mongoose";

export const dbConnection = ()=> {
    mongoose.connect("mongodb+srv://shub:shub@cluster0.9ss1tod.mongodb.net/?retryWrites=true", {
        dbName: "MERN_STACK_APPOINTMENT_SYSTEM"
    }).then(()=> {
        console.log("Connected to DB")
    }).catch(err=> {
        console.log(`Some error occured: ${err}`)
    })
}