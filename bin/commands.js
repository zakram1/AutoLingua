import translate from '@vitalets/google-translate-api';
import chalk from 'chalk';
import boxen from 'boxen';
import mongoose from 'mongoose';

export const funFact = async (language) => {
    await mongoose.connect('mongodb+srv://autolang:<password>@cluster0.bjwqkm0.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const lang = await mongoose.model('language').findOne({name: language});
    const fact = lang.facts[Math.floor(Math.random() * lang.facts.length)];
    console.log(chalk.hex('#00bcd4')(boxen(`${fact}`, {padding: 1, borderColor: '#00bcd4'})));
    await mongoose.disconnect();
}

export function showLangs() {
    console.log(chalk.red.bold('\nName\t\t\t Code'));
    for (let [lang, code] of langs) {
        console.log(chalk.blue(`${lang}\t\t ${code}`));
    }
}

export function translateSentence(sentence, language) {
    if (langs.has(language) || langs.values(language)) {
    translate(sentence, {to: language})
    .then(res => {console.log('\n' + boxen(chalk.blue('\n' + res.text + '\n'), 
        {padding: 0.5, borderColor: 'blue'}) + '\n');})
    .catch(err => {                            
         console.error(chalk.red.bold('\nMake sure you entered your sentence inside quotes and checked the list of supported languages (--langs)'));  
     });
    } else {
        console.log(chalk.red.bold('\nLanguage not found!'));
    }
}

let langs = new Map();
langs.set('Afrikaans', 'af');
langs.set('Albanian', 'sq');
langs.set('Amharic', '\t am');
langs.set('Armenian', 'hy');
langs.set('Basque', '\t eu');
langs.set('Belarusian', 'be');
langs.set('Bengali', '\t bn');
langs.set('Bosnian', '\t bs');
langs.set('Bulgarian', 'bg');
langs.set('Catalan', '\t ca');
langs.set('Cebuano', '\t ceb');
langs.set('Chichewa', 'ny');
langs.set('Croatian', 'hr');
langs.set('Czech', '\t cs');
langs.set('Danish', '\t da');
langs.set('Dutch', '\t nl');
langs.set('English', '\t en');
langs.set('Esperanto', 'eo');
langs.set('Estonian', 'et');
langs.set('Filipino', 'tl');
langs.set('Finnish', '\t fi');
langs.set('French', '\t fr');
langs.set('Frisian', '\t fy');
langs.set('Galician', 'gl');
langs.set('Georgian', 'ka');
langs.set('German', '\t de');
langs.set('Greek', '\t el');
langs.set('Gujarati', 'gu');
langs.set('Haitian Creole', 'ht');
langs.set('Hausa', '\t ha');
langs.set('Hawaiian', 'haw');
langs.set('Hindi', '\t hi');
langs.set('Hmong', '\t hmn');
langs.set('Hungarian', 'hu');
langs.set('Icelandic', 'is');
langs.set('Igbo', '\t ig');
langs.set('Indonesian', 'id');
langs.set('Irish', '\t ga');
langs.set('Italian', '\t it');
langs.set('Japanese', 'ja');
langs.set('Javanese', 'jw');
langs.set('Kannada', '\t kn');
langs.set('Kazakh', '\t kk');
langs.set('Khmer', '\t km');
langs.set('Korean', '\t ko');
langs.set('Kurdish', '\t ku');
langs.set('Kyrgyz', '\t ky');
langs.set('Lao', '\t lo');
langs.set('Latin', '\t la');
langs.set('Latvian', '\t lv');
langs.set('Lithuanian', 'lt');
langs.set('Luxembourgish', 'lb');
langs.set('Macedonian', 'mk');
langs.set('Malagasy', 'mg');
langs.set('Malay', '\t ms');
langs.set('Malayalam', 'ml');
langs.set('Maltese', '\t mt');
langs.set('Maori', '\t mi');
langs.set('Marathi', '\t mr');
langs.set('Mongolian', 'mn');
langs.set('Burmemse', 'my');
langs.set('Nepali', '\t ne');
langs.set('Norwegian', 'no');
langs.set('Pashto', '\t ps');
langs.set('Polish', '\t pl');
langs.set('Portuguese', 'pt');
langs.set('Punjabi', '\t pa');
langs.set('Romanian', 'ro');
langs.set('Russian', '\t ru');
langs.set('Samoan', '\t sm');
langs.set('Scots Gaelic', 'gd');
langs.set('Serbian', '\t sr');
langs.set('Sesotho', '\t st');
langs.set('Shona', '\t sn');
langs.set('Sindhi', '\t sd');
langs.set('Sinhala', '\t si');
langs.set('Slovak', '\t sk');
langs.set('Slovenian', 'sl');
langs.set('Somali', '\t so');
langs.set('Spanish', '\t es');
langs.set('Sundanese', 'su');
langs.set('Swahili', '\t sw');
langs.set('Swedish', '\t sv');
langs.set('Tajik', '\t tg');
langs.set('Tamil', '\t ta');
langs.set('Telugu', '\t te');
langs.set('Thai', '\t th');
langs.set('Turkish', '\t tr');
langs.set('Ukrainian', 'uk');
langs.set('Uzbek', '\t uz');
langs.set('Vietnamese', 'vi');
langs.set('Welsh', '\t cy');
langs.set('Xhosa', '\t xh');
langs.set('Yiddish', '\t yi');
langs.set('Yoruba', '\t yo');
langs.set('Zulu', '\t zu');