import { VirtualDisplay } from './virtual-display.js';
import { VirtualServer } from './virtual-server.js';

// https://wiki.archlinux.org/title/Xpra#As_xorg_sandbox

const display = new VirtualDisplay(1320, 1200);
const server = new VirtualServer(display);

try {
  server.create();
  server.destroy();
} catch (error) {
  if (error) {
    const asError = error as Error;
    console.log(asError);
    console.log('HEEHHEHE');
  }
}
