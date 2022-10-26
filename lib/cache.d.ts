export default class LruCache {
    private mapData;
    set(key: string, value: any, expirationTime?: number): void;
    get(key: string): any;
    has(key: string): boolean;
    size(): number;
    list(): Map<any, any>;
}
