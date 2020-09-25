export default interface IAdapter<T> {
  adapt(item: any): T;
}
