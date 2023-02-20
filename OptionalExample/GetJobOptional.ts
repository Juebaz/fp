import { Module } from "module"
import { Optional } from "../commonMonads/Optional"


type UserModel = {
    id: string, 
}

type JobModel = {name: string}

type Job = {name: string}

interface UserRepo {
  getUser: (id: string) => Optional<UserModel>
}

interface JobRepo {
  getJob: (user: UserModel) => Optional<JobModel>
}

const toDomain = (job: JobModel): Job => job
 

const getUserJob = (userRepo: UserRepo, jobRepo: JobRepo, userId: string): Optional<Job> => 
     userRepo
        .getUser(userId)
        .andThen(jobRepo.getJob)
        .map(toDomain)
  