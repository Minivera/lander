export class DOMPatchScheduler {
  private writes: (() => void)[];

  constructor() {
    this.writes = [];
  }

  write(task: () => void) {
    this.writes.push(task);
  }

  flush() {
    this.writes.forEach(task => task());
  }
}
