export interface IBaseRepository<T> {
    save(t: T): Promise<void>;
    exists(value: string): Promise<boolean>;
}
