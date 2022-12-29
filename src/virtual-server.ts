import { ChildProcess, spawn } from 'child_process';
import type { VirtualDisplay } from './virtual-display.js';

export async function ExecuteCommand(command: string, args?: string[]): Promise<ChildProcess> {
  const child = spawn(command, args);

  return new Promise((resolve, reject) => {
    child.on('error', (code: number, signal: any) => {
      console.log(`code = ${code}`);
      console.log(`signal = ${signal}`);
      reject(code);
    });

    resolve(child);
  });
}

export class VirtualServer {
  private child?: ChildProcess;

  constructor(private display: VirtualDisplay) {}

  create() {
    this.child = spawn('Xvfb', [
      ':0',
      '-nolisten',
      'tcp',
      '-noreset',
      '-screen',
      '0',
      `${this.display.width}x${this.display.heigth}x${this.display.depth}`,
    ]);

    this.child.on('error', function (err) {
      console.log('PEPE', err);
      throw new Error('HEHEHE');
    });

    // TODO: Wait until the server is loaded

    console.log('PAPA');
  }

  destroy() {
    if (this.child) {
      this.child.kill();
    }
  }
}
