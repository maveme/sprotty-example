"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var di_config_1 = require("./di.config");
var lib_1 = require("sprotty/lib");
function runStandalone() {
    var container = di_config_1.default();
    var node0 = { id: 'node0', status: 'running', type: 'task', position: { x: 100, y: 100 }, size: { width: 80, height: 80 } };
    var node1 = { id: 'node1', status: 'finished', type: 'task', position: { x: 550, y: 100 }, size: { width: 80, height: 80 } };
    var edge = { type: 'edge:straight', id: 'edge0', sourceId: 'node0', targetId: 'node1' };
    var graph = {
        type: 'graph',
        id: 'graph',
        children: [node0, node1, edge]
    };
    // Run the app
    var modelSource = container.get(lib_1.TYPES.ModelSource);
    modelSource.setModel(graph);
}
exports.default = runStandalone;
//# sourceMappingURL=standalone.js.map