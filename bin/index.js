#!/usr/bin/env node
import {Command} from 'commander';
import {showLangs, translateSentence, funFact} from './commands.js';
import chalk from 'chalk';

const program = new Command();

program
    .name('autolingua')
    .description(chalk.hex('#00bcd4')('A simple CLI for translating sentences and learning fun facts about languages!'))
    .version('0.0.1', '-v, --version', 'output the current version')
    .usage(chalk.green('[options]') + ', autolingua' + chalk.blue(' <command>'))
    .helpOption(false)
    .addHelpCommand(false)
    .showHelpAfterError('make sure you are using the correct command!')


program.command('langs')
    .description('show all available languages')
    .action(() => {
        showLangs();
    }
    );

program.command('funfact')
    .description('display a random fun fact about a language')
    .argument('<language>', 'language to get a fun fact about')
    .action((language) => {
        funFact(language);
    }
    );

program.command('translate')
    .description('translate a sentence into another language')
    .argument('<sentence>', 'sentence to translate (in quotes)')
    .argument('<language>', 'language to translate to')
    .action((sentence, language) => {
        translateSentence(sentence, language);
    }
    );

program.parse(process.argv);