import express from "express";
import {
  createItem,
  getItemById,
  getAllItems,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";
import upload from "../middlewares/multer.js";

const itemRouter = express.Router();

itemRouter.post("/", upload.array("images", 5), createItem);
itemRouter.get("/:id", getItemById);
itemRouter.get("/", getAllItems);
itemRouter.put("/:id", updateItem);
itemRouter.delete("/:id", deleteItem);

export default itemRouter;
