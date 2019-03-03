
import { 
    SNodeSchema, SNode
} from "sprotty/lib"

/** This MIGHT be not needed */
export interface TaskNodeSchema extends SNodeSchema {
    name?: string
    status?: string
}

export class TaskNode extends SNode {
    name: string = ''
    status: string = ''
}