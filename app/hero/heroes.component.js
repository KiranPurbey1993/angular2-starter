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
var router_deprecated_1 = require('@angular/router-deprecated');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_const_1 = require('./heroes.const');
var Heroes = (function () {
    function Heroes() {
        this.heroes = heroes_const_1.HEROES;
        this.selectedHero = undefined;
    }
    Heroes.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    Heroes.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    Heroes = __decorate([
        core_1.Component({
            selector: 'heroes',
            templateUrl: 'app/hero/heroes.component.html',
            styleUrls: ['app/hero/heroes.component.css'],
            directives: [hero_detail_component_1.HeroDetail, router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Heroes);
    return Heroes;
}());
exports.Heroes = Heroes;

//# sourceMappingURL=heroes.component.js.map
