#!/usr/bin/env node
import {Command} from 'commander';
import {showLangs, translateSentence, funFact} from './commands.js';
import chalk from 'chalk';

const program = new Command();

program
    .description(chalk.hex('#00bcd4')('A simple CLI for translating sentences and learning fun facts about languages!'))
    .version(chalk.green('0.0.1'))
    .usage(chalk.green('[options]') + ', autolang' + chalk.blue(' <command>'))
    .option('-l, --langs', 'lists all available languages', showLangs)
    .helpOption(false)
    .addHelpCommand(false)
    .showHelpAfterError('make sure you are using the correct command!')

program.command('translate')
    .description('translate a sentence into another language')
    .argument('<language>', 'language to translate to')
    .argument('<sentence>', 'sentence to translate')
    .action((sentence, language) => {
        translateSentence(sentence, language);
    }
    );

program.command('funfact')
    .description('display a random fun fact about a language')
    .argument('<language>', 'language to get a fun fact about')
    .action((language) => {
        funFact(language);
    }
    );

program.parse();