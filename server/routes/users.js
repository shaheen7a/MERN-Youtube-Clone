import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();


//Update user
router.put("/:id", verifyToken, update);

//Delete user
router.delete("/:id", verifyToken, deleteUser);

//Get a user
router.get("/find/:id", getUser);

//Subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

//Unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;