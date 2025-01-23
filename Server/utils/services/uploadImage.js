import cloudinary from "../../config/cloudinary.js";

export default async (buffer) => {
  try {
    const result = await cloudinary.uploader.upload(buffer, {
      folder: "thenashikgrapes/items",
      resource_type: "image",
    });
    return { result };
    // console.log(result);
  } catch (err) {
    console.log("Failed to upload file " + err.message);
    return { err };
  }
};
