"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var feathers_service_1 = require('../../services/feathers.service');
var LogsComponent = (function () {
    function LogsComponent(_feathersService) {
        this._feathersService = _feathersService;
        this.logs = [];
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._feathersService.getLogs().subscribe(function (logs) {
            console.log(logs);
            _this.logs = logs;
        });
    };
    LogsComponent.prototype.addLog = function () {
        var _this = this;
        var logDate = new Date();
        var newLog = {
            developer: this.logDev,
            text: this.logText,
            date: logDate
        };
        this._feathersService.addLog(newLog)
            .subscribe(function (data) {
            _this.logs.push({
                _id: data._id,
                text: _this.logText,
                developer: _this.logDev,
                date: data.date
            });
            _this.logText = '';
            _this.logDev = '';
        });
    };
    LogsComponent.prototype.deleteLog = function (id) {
        var _this = this;
        this._feathersService.deleteLog(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            for (var i = 0; i < _this.logs.length; i++) {
                if (_this.logs[i]._id == id) {
                    _this.logs.splice(i, 1);
                }
            }
        });
    };
    LogsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'logs',
            templateUrl: 'logs.component.html'
        }), 
        __metadata('design:paramtypes', [feathers_service_1.FeathersService])
    ], LogsComponent);
    return LogsComponent;
}());
exports.LogsComponent = LogsComponent;
//# sourceMappingURL=logs.component.js.map