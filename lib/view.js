"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx svg */
var snabbdom_jsx_1 = require("snabbdom-jsx");
var inversify_1 = require("inversify");
var TaskNodeView = /** @class */ (function () {
    function TaskNodeView() {
    }
    TaskNodeView.prototype.render = function (node, context) {
        var radius = this.getRadius(node);
        return snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("circle", { "class-sprotty-node": true, "class-selected": node.selected, r: radius, cx: radius, cy: radius }),
            snabbdom_jsx_1.svg("text", { x: radius, y: radius + 7, "class-sprotty-text": true }, node.status));
    };
    TaskNodeView.prototype.getRadius = function (node) {
        return 40;
    };
    TaskNodeView = __decorate([
        inversify_1.injectable()
    ], TaskNodeView);
    return TaskNodeView;
}());
exports.TaskNodeView = TaskNodeView;
//# sourceMappingURL=view.js.map