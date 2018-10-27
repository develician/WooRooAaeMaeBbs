"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
// import ws from './ws';
const posts_1 = __importDefault(require("./posts"));
const api = new koa_router_1.default();
api.use('/posts', posts_1.default.routes());
exports.default = api;