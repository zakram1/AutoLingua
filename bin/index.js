#!/usr/bin/env node
import {Command} from 'commander';
import chalk from 'chalk';
import boxen from 'boxen';
const program = new Command();

program
    .name(chalk.green('autolang'))
    .description(chalk.red('AutoLang is a tool to generate language files for your project.'))
    .version(chalk.green('0.0.1'))
    .usage(chalk.green('autolang [options]'))

program.command('translate')
    .description('Translate a sentence into another language')
    .argument('<sentence>', 'sentence to translate')
    .argument('<language>', 'language to translate to')
    .option('-l, --list', 'list all available languages')
    .option('-s, --source <source>', 'source language')
    .option('-t, --target <target>', 'target language')
    .action((sentence, language) => {
        console.log("\n" + boxen(chalk.green("\n" + 'Translating' + sentence + 'to' + language + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");
    }
    );
  
program.parse();
    
