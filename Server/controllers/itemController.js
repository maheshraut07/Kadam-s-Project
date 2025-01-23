import Item from "../models/Item.js";
import uploadImage from "../utils/services/uploadImage.js";

export const createItem = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const uploadedImages = [];
    for (const file of files) {
      const { result, err } = await uploadImage(file.path);
      if (err) throw err;
      uploadedImages.push(result.secure_url);
    }

    const newItem = new Item({
      name,
      category,
      price,
      description,
      images: uploadedImages,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const { search, category } = req.query;

    const query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    if (category) {
      query.category = category;
    }

    const items = await Item.find(query);

    res.status(200).json({
      items,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Can't fetch items" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const { name, quantity, category, price, description, images } = req.body;

    item.name = name || item.name;
    item.quantity = quantity || item.quantity;
    item.category = category || item.category;
    item.price = price || item.price;
    item.description = description || item.description;
    item.images = images || item.images;

    const updatedItem = await item.save();
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await item.remove();
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
