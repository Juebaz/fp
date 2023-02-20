
type UserModel = {id: string, name: string, middleName?: string, lastName?: string, email?: string }

type JobModel = {name: string}

type Job = {name: string}

interface UserRepo {

  getUser: (id: string) => UserModel | undefined

}

interface JobRepo {

  getJob: (user: UserModel) => JobModel | undefined

}

const toDomain = (job: JobModel): Job => job



const getUserJob = (userRepo: UserRepo, jobRepo: JobRepo, userId: string): Job |undefined => {
  const user = userRepo.getUser(userId)

  if (!user){
    return;
  }

  const job = jobRepo.getJob(user)

  if (!job){
    return;
  }

  return toDomain(job)
}

