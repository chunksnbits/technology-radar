"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("utils"));
__export(require("ui/components"));
__export(require("ui/modules"));
__export(require("store"));
__export(require("./bootstrap"));
__export(require("./registerServiceWorker"));
// ----------------------------------------------------------------------------- Dependencies
var App_1 = require("core/ui/views/App");
var registerServiceWorker_1 = require("./registerServiceWorker");
require("./styles.scss");
// ----------------------------------------------------------------------------- Configuration
var bootstrap_1 = require("./bootstrap");
var rootElement = document.querySelector('technology-radar');
var data_json_1 = require("public/data.json");
// ----------------------------------------------------------------------------- Implementation
bootstrap_1.bootstrap(App_1.App, rootElement, data_json_1.default);
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map