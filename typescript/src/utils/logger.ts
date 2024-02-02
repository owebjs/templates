import chalk from 'chalk';

export const success = (message: string) => {
    console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`);
};

export const info = (message: string) => {
    console.log(`${chalk.bgBlue(' INFO ')} ${message}`);
};

export const warn = (message: string) => {
    console.log(`${chalk.bgYellow(' WARN ')} ${message}`);
};

export const error = (message: string) => {
    console.log(`${chalk.bgRed(' ERROR ')} ${message}`);
};
