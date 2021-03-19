"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionHealthComponent = void 0;
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
/*const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-web', isOnline: true},
  {id: 2, name: 'dev-mail', isOnline: false},
  {id: 3, name: 'prod-web', isOnline: true},
  {id: 4, name: 'prod-web', isOnline: true},
]*/
var SectionHealthComponent = /** @class */ (function () {
    function SectionHealthComponent(_serverService) {
        this._serverService = _serverService;
    }
    SectionHealthComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    SectionHealthComponent.prototype.ngOnDestroy = function () {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    };
    SectionHealthComponent.prototype.refreshData = function () {
        var _this = this;
        this._serverService.getServers()
            .subscribe(function (res) {
            _this.servers = res;
        });
        this.subscribeToData();
    };
    SectionHealthComponent.prototype.subscribeToData = function () {
        var _this = this;
        this.timerSubscription = Rx_1.Observable.timer(5000).first().subscribe(function () { return _this.refreshData(); });
    };
    SectionHealthComponent = __decorate([
        core_1.Component({
            selector: 'app-section-health',
            templateUrl: './section-health.component.html',
            styleUrls: ['./section-health.component.css']
        })
    ], SectionHealthComponent);
    return SectionHealthComponent;
}());
exports.SectionHealthComponent = SectionHealthComponent;
//# sourceMappingURL=section-health.component.js.map