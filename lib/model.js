"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("sprotty/lib");
var TaskNode = /** @class */ (function (_super) {
    __extends(TaskNode, _super);
    function TaskNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '';
        _this.status = '';
        return _this;
    }
    return TaskNode;
}(lib_1.SNode));
exports.TaskNode = TaskNode;
//# sourceMappingURL=model.js.map