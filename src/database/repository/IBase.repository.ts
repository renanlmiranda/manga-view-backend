export interface IBaseRepository<T> {
    save(t: T): Promise<any>;
    exists(t: T): Promise<boolean>;
}
