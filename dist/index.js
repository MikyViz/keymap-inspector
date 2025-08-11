"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.he = exports.ua = exports.es = exports.fr = exports.de = exports.ru = exports.en = exports.KeymapInspector = void 0;
var KeymapInspector_1 = require("./KeymapInspector");
Object.defineProperty(exports, "KeymapInspector", { enumerable: true, get: function () { return KeymapInspector_1.KeymapInspector; } });
__exportStar(require("./types"), exports);
var en_1 = require("./layouts/en");
Object.defineProperty(exports, "en", { enumerable: true, get: function () { return en_1.en; } });
var ru_1 = require("./layouts/ru");
Object.defineProperty(exports, "ru", { enumerable: true, get: function () { return ru_1.ru; } });
var de_1 = require("./layouts/de");
Object.defineProperty(exports, "de", { enumerable: true, get: function () { return de_1.de; } });
var fr_1 = require("./layouts/fr");
Object.defineProperty(exports, "fr", { enumerable: true, get: function () { return fr_1.fr; } });
var es_1 = require("./layouts/es");
Object.defineProperty(exports, "es", { enumerable: true, get: function () { return es_1.es; } });
var ua_1 = require("./layouts/ua");
Object.defineProperty(exports, "ua", { enumerable: true, get: function () { return ua_1.ua; } });
var he_1 = require("./layouts/he");
Object.defineProperty(exports, "he", { enumerable: true, get: function () { return he_1.he; } });
__exportStar(require("./layouts"), exports);
