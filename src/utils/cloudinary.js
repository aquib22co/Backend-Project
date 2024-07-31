import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (LocalFilePath) => {
    try {
        if(!LocalFilePath) return null;
        //Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(LocalFilePath,{resource_type :"auto"})

        //file has been uploaded successfully 
        console.log('File is Uploaded on Cloudinary',response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(LocalFilePath)
        //Removes the Locally saved Temporary file
        return null
    }
}

export {uploadOnCloudinary}