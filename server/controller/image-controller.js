import File from "../models/file.js"

export const uploadimage=async(request,response)=>{
    const fileobj={
        path:request.file.path,
        name:request.file.originalname,
    }
    try{
        const file = await File.create(fileobj);
        response.status(200).json({ path: `http://localhost:${process.env.PORT}/file/${file._id}`});
    }catch(error){
        console.error(error.message);
        response.status(500).json({error:error.message})
    }
}

export const downloadImage = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId);
        
        file.downloadCount++;

        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        return response.status(500).json({ error: error.message });
    }
}