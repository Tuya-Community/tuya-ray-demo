/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class Logger {
  options = {
    success: '#00cca3',
    error: '#FFaa00',
    info: '#5091F3',
  };

  log(color: string, title: string, ...args: any): void {
    console.log(
      `%c Robot Log: ${title}`,
      `background: ${color}; color: #FFFFFF; font-size: 20px`,
      ...args
    );
  }

  success(title: string, ...args: any): void {
    this.log(this.options.success, title, ...args);
  }

  error(title: string, ...args: any): void {
    if (title === 'system error') {
      debugger;
    }
    this.log(this.options.error, title, ...args);
  }

  info(title: string, ...args: any): void {
    this.log(this.options.info, title, ...args);
  }
}

const logger = new Logger();

export default logger;
