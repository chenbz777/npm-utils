export default class LruCache {
    private mapData;
    set(key: string, value: any, expirationTime?: number): void;
    get(key: string): any;
    has(key: string): boolean;
    delete(key: string): void;
    size(): number;
    list(): Map<any, any>;
}
