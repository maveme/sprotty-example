
import createContainer from "./di.config"
import {
    SGraphSchema, LocalModelSource, TYPES, SEdgeSchema
} from "sprotty/lib"
import { TaskNodeSchema } from "./model";


export default function runStandalone() {
    const container = createContainer();
    const node0: TaskNodeSchema = { id: 'node0', status: 'running', type: 'task', position: { x: 100, y: 100 }, size: { width: 80, height: 80 } };
    const node1: TaskNodeSchema = { id: 'node1', status: 'finished', type: 'task', position: { x: 550, y: 100 }, size: { width: 80, height: 80 } };
    const edge: SEdgeSchema = { type: 'edge:straight', id: 'edge0', sourceId: 'node0', targetId: 'node1' };
    const graph: SGraphSchema = {
        type: 'graph',
        id: 'graph',
        children: [node0, node1, edge]
    }

    // Run the app
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource)
    modelSource.setModel(graph)
}