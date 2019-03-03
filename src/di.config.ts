import {Container, ContainerModule } from "inversify";
import {TYPES, SGraphFactory, configureModelElement, SGraph, SGraphView, SEdge, 
        PolylineEdgeView, defaultModule, selectModule, moveModule, boundsModule, 
        undoRedoModule, exportModule, LocalModelSource, configureViewerOptions, viewportModule, routingModule, graphModule, updateModule
    } from "sprotty/lib"
import {TaskNodeView} from "./view";
import {TaskNode} from "./model"

export default () => {
    require("./css/diagram.css");
    require("./css/sprotty.css");
    // require("./node_modules/sprotty/css");
    const flowModule = new ContainerModule((bind, unbind, isBound, rebind) => {
        rebind(TYPES.IModelFactory).to(SGraphFactory).inSingletonScope();
        bind(TYPES.ModelSource).to(LocalModelSource).inSingletonScope();

        const context = {bind, unbind, isBound, rebind};
        configureModelElement(context, 'graph', SGraph, SGraphView);
        configureModelElement(context, 'task', TaskNode, TaskNodeView);
        configureModelElement(context, 'edge:straight', SEdge, PolylineEdgeView);
        configureViewerOptions(context, {
            needsClientLayout: false
        });
    });

    const container = new Container();
    container.load(defaultModule, selectModule, moveModule, boundsModule, undoRedoModule,  viewportModule, exportModule, updateModule, graphModule, routingModule, flowModule);
    return container;

};
