import chalk from 'chalk';

/**
 * 
 * @param {string} message
 */
export const success = (message) => {
    console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`);
};

/**
 * 
 * @param {string} message
 */
export const info = (message) => {
    console.log(`${chalk.bgBlue(' INFO ')} ${message}`);
};

/**
 * 
 * @param {string} message
 */
export const warn = (message) => {
    console.log(`${chalk.bgYellow(' WARN ')} ${message}`);
};

/**
 * 
 * @param {string} message
 */
export const error = (message) => {
    console.log(`${chalk.bgRed(' ERROR ')} ${message}`);
};
