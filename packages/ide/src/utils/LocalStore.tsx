/**
 * A localStorage-based persistent data storage.
 */
export class LocalStore {
    get(key: string): any {
        return JSON.parse(localStorage.getItem(key) || "null")
    }

    set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const localStore = new LocalStore()
