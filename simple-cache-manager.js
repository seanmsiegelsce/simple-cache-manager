class SimpleCacheManager {

    constructor() {
        this.cache = [];
    }

    set(key, data) {
        this.cache[key] = data;
    }

    get(key) {
        return this.cache[key];
    }

    exists(key) {
        return this.cache[key] !== undefined;
    }

}

export default (new SimpleCacheManager);