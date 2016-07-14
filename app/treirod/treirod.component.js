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
var cell_component_1 = require('./cell/cell.component');
var matrix_service_1 = require('./matrix.service');
var strategy_service_1 = require('./strategy.service');
var TreIRodComponent = (function () {
    function TreIRodComponent(matrix, strategy) {
        this.matrix = matrix;
        this.strategy = strategy;
        this.title = 'Tre i Rod game';
        this.rows = [];
        this.slowComputer = true;
        this.rows = matrix.rows;
        this.youAreX = matrix.computerTurn === matrix_service_1.GameState.OTurn;
    }
    Object.defineProperty(TreIRodComponent.prototype, "easyMode", {
        get: function () { return this.strategy && this.strategy.easyMode; },
        set: function (easy) { this.strategy.easyMode = easy; },
        enumerable: true,
        configurable: true
    });
    TreIRodComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.slowComputer) {
            this.execComputerMove = function () {
                return setTimeout(function () { return _this.computerMove(); }, Math.random() * 5000 + 500);
            };
        }
        else {
            this.execComputerMove = function () { return _this.computerMove(); };
        }
        this.updateStats();
    };
    TreIRodComponent.prototype.updateStats = function () {
        this.yourTurn = this.matrix.gameState !== matrix_service_1.GameState.Won &&
            this.matrix.gameState !== matrix_service_1.GameState.Draw &&
            this.matrix.gameState !== this.matrix.computerTurn;
        this.won = this.matrix.gameState === matrix_service_1.GameState.Won;
        this.computerWon = this.matrix.computerWon;
        this.draw = this.matrix.gameState === matrix_service_1.GameState.Draw;
        if (!this.yourTurn) {
            this.execComputerMove();
        }
    };
    TreIRodComponent.prototype.stateChange = function (cell) {
        cell.state = this.matrix.gameState === matrix_service_1.GameState.XTurn ? matrix_service_1.State.X : matrix_service_1.State.O;
        this.matrix.advanceBoardState();
        this.updateStats();
    };
    TreIRodComponent.prototype.computerMove = function () {
        if (this.yourTurn || this.won || this.draw) {
            return;
        }
        this.strategy.executeStrategy(this.matrix.winLines, this.matrix.computerTurn === matrix_service_1.GameState.XTurn ? matrix_service_1.State.X : matrix_service_1.State.O);
        this.matrix.advanceBoardState();
        this.updateStats();
    };
    TreIRodComponent.prototype.reset = function () {
        this.matrix.reset();
        this.youAreX = this.matrix.computerTurn === matrix_service_1.GameState.OTurn;
        this.updateStats();
    };
    TreIRodComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tre-dashboard',
            templateUrl: '/app/treirod/treirod.component.html',
            styleUrls: ['treirod.component.css'],
            directives: [cell_component_1.CellComponent],
            providers: [matrix_service_1.MatrixService, strategy_service_1.StrategyService]
        }), 
        __metadata('design:paramtypes', [matrix_service_1.MatrixService, strategy_service_1.StrategyService])
    ], TreIRodComponent);
    return TreIRodComponent;
}());
exports.TreIRodComponent = TreIRodComponent;
//# sourceMappingURL=treirod.component.js.map