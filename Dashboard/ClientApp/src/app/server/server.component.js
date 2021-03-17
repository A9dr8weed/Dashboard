"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerComponent = void 0;
var core_1 = require("@angular/core");
var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
    }
    ServerComponent.prototype.ngOnInit = function () {
        this.setServerStatus(this.serverInput.isOnline);
    };
    ServerComponent.prototype.setServerStatus = function (isOnline) {
        if (isOnline) {
            this.serverInput.isOnline = true;
            this.color = '#66bb6a';
            this.buttonText = 'Shut Down';
        }
        else {
            this.serverInput.isOnline = false;
            this.color = '#ff6b6b';
            this.buttonText = 'Start';
        }
    };
    ServerComponent.prototype.toggleStatus = function (onlineStatus) {
        console.log(this.serverInput.name, ': ', onlineStatus);
        this.setServerStatus(!onlineStatus);
    };
    __decorate([
        core_1.Input()
    ], ServerComponent.prototype, "serverInput", void 0);
    ServerComponent = __decorate([
        core_1.Component({
            selector: 'app-server',
            templateUrl: './server.component.html',
            styleUrls: ['./server.component.css']
        })
    ], ServerComponent);
    return ServerComponent;
}());
exports.ServerComponent = ServerComponent;
//# sourceMappingURL=server.component.js.map