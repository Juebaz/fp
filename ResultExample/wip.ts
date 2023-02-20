import { Module } from "module";


type File = {id: string, size: number}

type TodoInfo = {todo: string, file: File}

interface FileUploadService {
    getUploadUrl(file: File): string, // can throw
    uploadFile(file: File, uploadUrl: string): string, // can throw
}

class InvalidFileSize extends Error {}

const handleUploadOfFile = (file: File, fileService: FileUploadService): void => {
    if (file.size > 100){
        throw new InvalidFileSize()
    }

    const url = fileService.getUploadUrl(file) //can throw

    fileService.uploadFile(file, url) // can throw
}



