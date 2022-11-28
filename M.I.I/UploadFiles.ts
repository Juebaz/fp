enum UploadSessionStatus {
    Created = "Created",
    Idle = "Idle",
    InProgress = "InProgress",
    Completed = "Completed",
    Failed = "Failed"
  }
  ​

type Upload= { status: UploadSessionStatus , file: File }

type UploadInProgress = Upload & {status: UploadSessionStatus.InProgress, progress: number, url: string}
export type UploadIdle = Upload & {status: UploadSessionStatus.Idle}
type UploadCreated = Upload & {status: UploadSessionStatus.Created}
type UploadCompleted = Upload & {status: UploadSessionStatus.Completed}
type UploadFailed = Upload & {status: UploadSessionStatus.Failed}

export type UploadSession = UploadInProgress | UploadCreated | UploadCompleted | UploadFailed


const createUploadSession = (fileToUpload: File): UploadCreated => {
    return {file: fileToUpload, status: UploadSessionStatus.Created}
}

const start = (createdUpload: UploadCreated, url: string ): UploadInProgress => {
    return {...createdUpload, status: UploadSessionStatus.InProgress, url, progress: 0 }
}


