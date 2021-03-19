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
        this.serverAction = new core_1.EventEmitter();
    }
    ServerComponent.prototype.ngOnInit = function () {
        this.setServerStatus(this.serverInput.isOnline);
    };
    ServerComponent.prototype.setServerStatus = function (isOnline) {
        if (isOnline) {
            this.serverInput.isOnline = true;
            this.serverStatus = 'Online';
            this.color = '#66bb6a';
            this.buttonText = 'Shut Down';
        }
        else {
            this.serverInput.isOnline = false;
            this.serverStatus = 'Offline';
            this.color = '#ff6b6b';
            this.buttonText = 'Start';
        }
    };
    ServerComponent.prototype.sendServerAction = function (isOnline) {
        console.log('called');
        this.makeLoading();
        var payload = this.buildPayload(isOnline);
        this.serverAction.emit(payload);
    };
    ServerComponent.prototype.makeLoading = function () {
        this.color = '#ffca28';
        this.buttonText = 'Pending...';
        this.isLoading = true;
        this.serverStatus = 'Loading';
    };
    ServerComponent.prototype.buildPayload = function (isOnline) {
        if (isOnline) {
            return {
                id: this.serverInput.id,
                payload: 'deactivate'
            };
        }
        else {
            return {
                id: this.serverInput.id,
                payload: 'activate'
            };
        }
    };
    __decorate([
        core_1.Input()
    ], ServerComponent.prototype, "serverInput", void 0);
    __decorate([
        core_1.Output()
    ], ServerComponent.prototype, "serverAction", void 0);
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