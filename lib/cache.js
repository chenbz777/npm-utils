"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LruCache {
    constructor() {
        this.mapData = new Map();
    }
    // 赋值(标识, 值, 过期时间 => 单位s)
    set(key, value, expirationTime) {
        if (expirationTime) {
            // 设置了过期时间 => 重新计算过期时间
            const currentTime = new Date();
            currentTime.setSeconds(currentTime.getSeconds() + expirationTime);
            this.mapData.set(key, {
                value,
                expirationTime: currentTime.getTime(),
            });
        }
        else if (this.mapData.get(key)) {
            // 没有过期时间，并且数据存在 => 仅更换value
            const data = this.mapData.get(key);
            if (data) {
                this.mapData.set(key, {
                    value,
                    expirationTime: data.expirationTime,
                });
            }
        }
        else {
            // 没有过期时间，数据也不存在 => 新增数据
            this.mapData.set(key, {
                value,
                expirationTime: -1,
            });
        }
    }
    // 获取(标识)
    get(key) {
        if (!this.mapData.get(key)) {
            return null;
        }
        const data = this.mapData.get(key);
        // 判断是否存在过期时间
        if ((data.expirationTime !== -1) && (Date.now() > data.expirationTime)) {
            this.mapData.delete(key);
            return null;
        }
        return data.value;
    }
    // 判断是否存在(标识)
    has(key) {
        return this.mapData.has(key);
    }
    // 获取长度
    size() {
        return this.mapData.size;
    }
    // 获取所有值
    list() {
        return this.mapData;
    }
}
exports.default = LruCache;
