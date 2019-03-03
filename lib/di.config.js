"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var lib_1 = require("sprotty/lib");
var view_1 = require("./view");
var model_1 = require("./model");
exports.default = (function () {
    require("./css/diagram.css");
    require("./css/sprotty.css");
    // require("./node_modules/sprotty/css");
    var flowModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
        rebind(lib_1.TYPES.IModelFactory).to(lib_1.SGraphFactory).inSingletonScope();
        bind(lib_1.TYPES.ModelSource).to(lib_1.LocalModelSource).inSingletonScope();
        var context = { bind: bind, unbind: unbind, isBound: isBound, rebind: rebind };
        lib_1.configureModelElement(context, 'graph', lib_1.SGraph, lib_1.SGraphView);
        lib_1.configureModelElement(context, 'task', model_1.TaskNode, view_1.TaskNodeView);
        lib_1.configureModelElement(context, 'edge:straight', lib_1.SEdge, lib_1.PolylineEdgeView);
        lib_1.configureViewerOptions(context, {
            needsClientLayout: false
        });
    });
    var container = new inversify_1.Container();
    container.load(lib_1.defaultModule, lib_1.selectModule, lib_1.moveModule, lib_1.boundsModule, lib_1.undoRedoModule, lib_1.viewportModule, lib_1.exportModule, lib_1.updateModule, lib_1.graphModule, lib_1.routingModule, flowModule);
    return container;
});
//# sourceMappingURL=di.config.js.map