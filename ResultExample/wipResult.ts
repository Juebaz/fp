import { Module } from "module"
import { failure, Result, success } from "../monads/Result"


type File = {id: string, size: number}

type Error = "InvalidFileSize" | "UploadError"

interface FileUploadService {
    getUploadInfo(file: File): Result<Error, string>, // can throw
    uploadFile(uploadInfoUrl: string): Result<Error,string>, // can throw
}


const validateFile = (file: File): Result<Error, File> => {
    if (file.size > 1000){
        return failure("InvalidFileSize");
    }
    return success(file)
}

// dependency injection : Partial application
const handleUploadOfFile = (fileService: FileUploadService) => (file: File): Result<Error,string> => 
    validateFile(file)
        .andThen(fileService.getUploadInfo)
        .andThen(fileService.uploadFile)


