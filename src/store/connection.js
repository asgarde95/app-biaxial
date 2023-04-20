import { defineStore } from 'pinia';
import { hex } from "@/util/util";
import { getUsbInfo } from "@/util/usb-ids";

const vid_pid = (port) => {
  const info = port.getInfo()
  return hex(info.usbVendorId) + ':' + hex(info.usbProductId)
}

const decoder = new TextDecoder();

const useConnectionStore = defineStore({
  id: 'connection',
  state: () => ({
    id: undefined,
    vendor: undefined,
    product: undefined,
    port: undefined,
    physicallyConnected: false,
    open: false,
    _reader: undefined,
    options: {
      baudRate: 115200,
      bufferSize: 4096,
      dataBits: 8,
      flowControl: "none",
      parity: "none",
      stopBits: 1
    },
    signals: {},
    messages: [],
  }),
  getters: {
  },
  actions: {
    async selectPort() {
      try {
        if (!navigator.serial) return false

        const port = await navigator.serial.requestPort()
        //@ts-ignore
        const info = await getUsbInfo(port)
        window.location.search = `?vid=${info.vid}&pid=${info.pid}`
        return true
      }
      catch (e) { }
    },

    async init(vid, pid) {
      const ports = await navigator.serial.getPorts()
      const id = vid + ':' + pid
      //@ts-ignore
      this.port = ports.find((port) => vid_pid(port) === id)
      if (!this.port) {
        window.location.search = ``
        return;
      }
      //@ts-ignore
      this.id = id
      //@ts-ignore
      const info = await getUsbInfo(this.port)
      this.vendor = info.vendor
      this.product = info.product
      this.physicallyConnected = true

      // notification for a USB device getting physically connected
      const onconnect = (e) => {
        console.log(id + 'device connected', e)
        this.port = e.target
        this.physicallyConnected = true
      }
      navigator.serial.addEventListener('connect', onconnect);

      // notification for a USB device getting physically disconnected
      const ondisconnect = (e) => {
        console.log(id + ' disconnect')
        this.physicallyConnected = false
        this.open = false
      }
      navigator.serial.addEventListener('disconnect', ondisconnect);
      console.log(id + ' initialized')
    },

    async connect() {
      if (!this.port) return
      console.log(this.id + ': opening')
      try {
        //@ts-ignore
        await this.port.open(this.options)
        //@ts-ignore
        this.open = !!this.port?.readable
        console.log(this.id + ': opened')
        this.read()
        console.log(this.options.baudRate)
      }
      catch (e) {
        console.log(e)
        //@ts-ignore
        window.alert(e.message)
      }
    },

    async read() {
      // console.log('Reading from SerialPort()')
      //@ts-ignore
      while (this.open && this.port?.readable) {
        this.open = true
        //@ts-ignore
        const reader = this.port.readable.getReader()
        //@ts-ignore
        this._reader = reader
        try {
          while (this.open) {
            console.log('reading...')
            const { value, done } = await reader.read();
            if (done) {
              // |reader| has been canceled.
              this.open = false;
              break;
            }
            const decoded = decoder.decode(value) + "\n";
            // console.log('read complete:', decoded, value, done);
            //@ts-ignore
            this.messages.push(decoded);
            await this.delay(1000);
          }
        } catch (error) {
          console.error('reading error', error);
        } finally {
          reader.releaseLock()
        }
      }
    },

    async close() {
      if (this._reader) {
        //@ts-ignore
        await this._reader.cancel()
      }
      //@ts-ignore
      this.port.close()
    },

    delay(milliseconds){
      return new Promise(resolve => {
          setTimeout(resolve, milliseconds);
      });
  },

  }
})

export { useConnectionStore }
