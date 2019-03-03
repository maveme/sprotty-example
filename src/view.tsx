/** @jsx svg */
import { svg } from 'snabbdom-jsx';

import {
    IView, RenderingContext, SNode,
} from "sprotty/lib"
import { VNode } from "snabbdom/vnode";
import {TaskNode} from "./model"

import {injectable} from 'inversify';

@injectable()
export class TaskNodeView implements IView {
    render(node: TaskNode, context: RenderingContext): VNode {
        const radius = this.getRadius(node);

        return <g>
                    <circle class-sprotty-node={true} class-selected={node.selected} r={radius} cx={radius} cy={radius}></circle>
                    <text x={radius} y={radius + 7} class-sprotty-text={true}>{node.status}</text>
                </g>
    }

    protected getRadius(node: SNode) {
        return 40;
    }
}