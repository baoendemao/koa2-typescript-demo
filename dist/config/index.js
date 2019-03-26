"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dev_1 = __importDefault(require("./dev"));
const prod_1 = __importDefault(require("./prod"));
const default_1 = __importDefault(require("./default"));
let config;
switch (process.env.NODE_ENV) {
    case 'development':
        config = dev_1.default;
        break;
    case 'production':
        config = prod_1.default;
        break;
    default:
        config = default_1.default;
        break;
}
exports.default = config;
//# sourceMappingURL=index.js.map