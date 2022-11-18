import { just, none, Optional } from "./Optional";

type Employee1 = {name: string | undefined, supervisorId: string | undefined}

const repository1 = {
    findById: (i: string): Employee1 => {
        return {name: 'joe', supervisorId: '234'}
    }
}

// without optional
function getSupervisorName(enteredId?: string) {
    if (enteredId) {
        const employee = repository1.findById(enteredId);
        if (employee && employee.supervisorId) {
            const supervisor = repository1.findById(employee.supervisorId);
            if (supervisor) {
                return supervisor.name;
            }
        }
    }
}

// with Optional
function getSupervisorName2(enteredId: Optional<string>): Optional<string> {
     return enteredId
        .andThen(repository2.findById)
        .andThen(employe => employe.supervisorId)
        .andThen(repository2.findById)
        .map(surpervisor => surpervisor.name)
}




type Employee2 = {supervisorId: Optional<string>, name: string}

const repository2 = {
    findById: (i: string): Optional<Employee2> => {
        return just({supervisorId: none(), name: "jane"})
    }
}

