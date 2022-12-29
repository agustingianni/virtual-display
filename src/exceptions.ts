export class MissingDependency extends Error {
  constructor(message?: string) {
    super();
    this.name = 'MissingDependency';
    if (message) this.message = `'${message}'`;
  }
}
