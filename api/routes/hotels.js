import express from "express";
<<<<<<< HEAD

import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updatedHotel } from "../controllers/hotel.js";
=======
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
>>>>>>> 9daa32f7376718fca39fd86ea305e8cf0d623401
import { verifyAdmin } from "../utils/verifyToken.js";

    const router = express.Router();

    //CREATE
    router.post("/",verifyAdmin,createHotel);

    //UPDATE
    router.put("/:id",verifyAdmin,updateHotel);

    //DELETE
    router.delete("/:id",verifyAdmin,deleteHotel)

     //GET
    router.get("/find/:id",getHotel)

<<<<<<< HEAD
//GET ALL
router.get("/",getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
=======
     //GET ALL
    router.get("/",getHotels)
    
    //GET ALL CITIES
    router.get("/countByCity",countByCity)
    
    //GET ALL TYPE
    router.get("/countByType",countByType)
>>>>>>> 9daa32f7376718fca39fd86ea305e8cf0d623401

    export default router;