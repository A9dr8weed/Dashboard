"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerService = void 0;
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
var ServerService = /** @class */ (function () {
    function ServerService(_http) {
        this._http = _http;
    }
    ServerService.prototype.getServers = function () {
        return this._http.get('https://localhost:5001/api/server/').catch(this.handleError);
    };
    ServerService.prototype.handleError = function (error) {
        console.log('error!');
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ServerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServerService);
    return ServerService;
}());
exports.ServerService = ServerService;
//# sourceMappingURL=server.service.js.map