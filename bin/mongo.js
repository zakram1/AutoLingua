// connect to mongoDB
import mongoose from "mongoose";

function connect() {
    mongoose.connect('mongodb+srv://autolang:a1veSFcHK8XOvmHq@cluster0.bjwqkm0.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'autolang'
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    }
    );
    db.collection('galician').insertOne({funfact: 'Galician is a language spoken in the country of Galicia.'});
    db.collection('galician').insertOne({funfact: 'Galician is a language spoken in the country of Galicia.'});
    db.collection('galician').insertOne({funfact: 'Galician is a language spoken in the country of Galicia.'});
    db.collection('georgian').insertOne({funfact: 'Georgian is a language spoken in the country of Georgia.'});
    db.collection('georgian').insertOne({funfact: 'Georgian is a language spoken in the country of Georgia.'});
    db.collection('georgian').insertOne({funfact: 'Georgian is a language spoken in the country of Georgia.'});
    db.collection('german').insertOne({funfact: 'German is a language spoken in the country of Germany.'});
    db.collection('german').insertOne({funfact: 'German is a language spoken in the country of Germany.'});
    db.collection('german').insertOne({funfact: 'German is a language spoken in the country of Germany.'});
    db.collection('greek').insertOne({funfact: 'Greek is a language spoken in the country of Greece.'});
    db.collection('greek').insertOne({funfact: 'Greek is a language spoken in the country of Greece.'});
    db.collection('greek').insertOne({funfact: 'Greek is a language spoken in the country of Greece.'});
    db.collection('gujarati').insertOne({funfact: 'Gujarati is a language spoken in the country of India.'});
    db.collection('gujarati').insertOne({funfact: 'Gujarati is a language spoken in the country of India.'});
    db.collection('gujarati').insertOne({funfact: 'Gujarati is a language spoken in the country of India.'});
    db.collection('haitian creole').insertOne({funfact: 'Haitian is a language spoken in the country of Haiti.'});
    db.collection('haitian creole').insertOne({funfact: 'Haitian is a language spoken in the country of Haiti.'});
    db.collection('haitian creole').insertOne({funfact: 'Haitian is a language spoken in the country of Haiti.'});
    db.collection('hindi').insertOne({funfact: 'Hindi is a language spoken in the country of India.'});
    db.collection('hindi').insertOne({funfact: 'Hindi is a language spoken in the country of India.'});
    db.collection('hindi').insertOne({funfact: 'Hindi is a language spoken in the country of India.'});
    db.collection('hmong').insertOne({funfact: 'Hmong is a language spoken in the country of Hmong.'});
    db.collection('hmong').insertOne({funfact: 'Hmong is a language spoken in the country of Hmong.'});
    db.collection('hmong').insertOne({funfact: 'Hmong is a language spoken in the country of Hmong.'});
    db.collection('hungarian').insertOne({funfact: 'Hungarian is a language spoken in the country of Hungary.'});
    db.collection('hungarian').insertOne({funfact: 'Hungarian is a language spoken in the country of Hungary.'});
    db.collection('hungarian').insertOne({funfact: 'Hungarian is a language spoken in the country of Hungary.'});
    db.collection('icelandic').insertOne({funfact: 'Icelandic is a language spoken in the country of Iceland.'});
    db.collection('icelandic').insertOne({funfact: 'Icelandic is a language spoken in the country of Iceland.'});
    db.collection('icelandic').insertOne({funfact: 'Icelandic is a language spoken in the country of Iceland.'});
    db.collection('igbo').insertOne({funfact: 'Igbo is a language spoken in the country of Nigeria.'});
    db.collection('igbo').insertOne({funfact: 'Igbo is a language spoken in the country of Nigeria.'});
    db.collection('igbo').insertOne({funfact: 'Igbo is a language spoken in the country of Nigeria.'});
    db.collection('indonesian').insertOne({funfact: 'Indonesian is a language spoken in the country of Indonesia.'});
    db.collection('indonesian').insertOne({funfact: 'Indonesian is a language spoken in the country of Indonesia.'});
    db.collection('indonesian').insertOne({funfact: 'Indonesian is a language spoken in the country of Indonesia.'});
    db.collection('irish').insertOne({funfact: 'Irish is a language spoken in the country of Ireland.'});
    db.collection('irish').insertOne({funfact: 'Irish is a language spoken in the country of Ireland.'});
    db.collection('irish').insertOne({funfact: 'Irish is a language spoken in the country of Ireland.'});
    db.collection('italian').insertOne({funfact: 'Italian is a language spoken in the country of Italy.'});
    db.collection('italian').insertOne({funfact: 'Italian is a language spoken in the country of Italy.'});
    db.collection('italian').insertOne({funfact: 'Italian is a language spoken in the country of Italy.'});
    db.collection('japanese').insertOne({funfact: 'Japanese is a language spoken in the country of Japan.'});
    db.collection('japanese').insertOne({funfact: 'Japanese is a language spoken in the country of Japan.'});
    db.collection('japanese').insertOne({funfact: 'Japanese is a language spoken in the country of Japan.'});
    db.collection('javanese').insertOne({funfact: 'Javanese is a language spoken in the country of Indonesia.'});
    db.collection('javanese').insertOne({funfact: 'Javanese is a language spoken in the country of Indonesia.'});
    db.collection('javanese').insertOne({funfact: 'Javanese is a language spoken in the country of Indonesia.'});
    db.collection('kannada').insertOne({funfact: 'Kannada is a language spoken in the country of India.'});
    db.collection('kannada').insertOne({funfact: 'Kannada is a language spoken in the country of India.'});
    db.collection('kannada').insertOne({funfact: 'Kannada is a language spoken in the country of India.'});
    db.collection('kazakh').insertOne({funfact: 'Kazakh is a language spoken in the country of Kazakhstan.'});
    db.collection('kazakh').insertOne({funfact: 'Kazakh is a language spoken in the country of Kazakhstan.'});
    db.collection('kazakh').insertOne({funfact: 'Kazakh is a language spoken in the country of Kazakhstan.'});
    db.collection('khmer').insertOne({funfact: 'Khmer is a language spoken in the country of Cambodia.'});
    db.collection('khmer').insertOne({funfact: 'Khmer is a language spoken in the country of Cambodia.'});
    db.collection('khmer').insertOne({funfact: 'Khmer is a language spoken in the country of Cambodia.'});
    db.collection('korean').insertOne({funfact: 'Korean is a language spoken in the country of Korea.'});
    db.collection('korean').insertOne({funfact: 'Korean is a language spoken in the country of Korea.'});
    db.collection('korean').insertOne({funfact: 'Korean is a language spoken in the country of Korea.'});
    db.collection('kurdish').insertOne({funfact: 'Kurdish is a language spoken in the country of Kurdistan.'});
    db.collection('kurdish').insertOne({funfact: 'Kurdish is a language spoken in the country of Kurdistan.'});
    db.collection('kurdish').insertOne({funfact: 'Kurdish is a language spoken in the country of Kurdistan.'});
    db.collection('kyrgyz').insertOne({funfact: 'Kyrgyz is a language spoken in the country of Kyrgyzstan.'});
    db.collection('kyrgyz').insertOne({funfact: 'Kyrgyz is a language spoken in the country of Kyrgyzstan.'});
    db.collection('kyrgyz').insertOne({funfact: 'Kyrgyz is a language spoken in the country of Kyrgyzstan.'});
    db.collection('lao').insertOne({funfact: 'Lao is a language spoken in the country of Laos.'});
    db.collection('lao').insertOne({funfact: 'Lao is a language spoken in the country of Laos.'});
    db.collection('lao').insertOne({funfact: 'Lao is a language spoken in the country of Laos.'});
    db.collection('latvian').insertOne({funfact: 'Latvian is a language spoken in the country of Latvia.'});
    db.collection('latvian').insertOne({funfact: 'Latvian is a language spoken in the country of Latvia.'});
    db.collection('latvian').insertOne({funfact: 'Latvian is a language spoken in the country of Latvia.'});
    db.collection('lithuanian').insertOne({funfact: 'Lithuanian is a language spoken in the country of Lithuania.'});
    db.collection('lithuanian').insertOne({funfact: 'Lithuanian is a language spoken in the country of Lithuania.'});
    db.collection('lithuanian').insertOne({funfact: 'Lithuanian is a language spoken in the country of Lithuania.'});
    db.collection('luxembourgish').insertOne({funfact: 'Luxembourgish is a language spoken in the country of Luxembourg.'});
    db.collection('luxembourgish').insertOne({funfact: 'Luxembourgish is a language spoken in the country of Luxembourg.'});
    db.collection('luxembourgish').insertOne({funfact: 'Luxembourgish is a language spoken in the country of Luxembourg.'});
    db.collection('macedonian').insertOne({funfact: 'Macedonian is a language spoken in the country of Macedonia.'});
    db.collection('macedonian').insertOne({funfact: 'Macedonian is a language spoken in the country of Macedonia.'});
    db.collection('macedonian').insertOne({funfact: 'Macedonian is a language spoken in the country of Macedonia.'});
    db.collection('malagasy').insertOne({funfact: 'Malagasy is a language spoken in the country of Madagascar.'});
    db.collection('malagasy').insertOne({funfact: 'Malagasy is a language spoken in the country of Madagascar.'});
    db.collection('malagasy').insertOne({funfact: 'Malagasy is a language spoken in the country of Madagascar.'});
    db.collection('malay').insertOne({funfact: 'Malay is a language spoken in the country of Malaysia.'});
    db.collection('malay').insertOne({funfact: 'Malay is a language spoken in the country of Malaysia.'});
    db.collection('malay').insertOne({funfact: 'Malay is a language spoken in the country of Malaysia.'});
    db.collection('malayalam').insertOne({funfact: 'Malayalam is a language spoken in the country of India.'});
    db.collection('malayalam').insertOne({funfact: 'Malayalam is a language spoken in the country of India.'});
    db.collection('malayalam').insertOne({funfact: 'Malayalam is a language spoken in the country of India.'});
    db.collection('maltese').insertOne({funfact: 'Maltese is a language spoken in the country of Malta.'});
    db.collection('maltese').insertOne({funfact: 'Maltese is a language spoken in the country of Malta.'});
    db.collection('maltese').insertOne({funfact: 'Maltese is a language spoken in the country of Malta.'});
    db.collection('maori').insertOne({funfact: 'Maori is a language spoken in the country of New Zealand.'});
    db.collection('maori').insertOne({funfact: 'Maori is a language spoken in the country of New Zealand.'});
    db.collection('maori').insertOne({funfact: 'Maori is a language spoken in the country of New Zealand.'});
    db.collection('marathi').insertOne({funfact: 'Marathi is a language spoken in the country of India.'});
    db.collection('marathi').insertOne({funfact: 'Marathi is a language spoken in the country of India.'});
    db.collection('marathi').insertOne({funfact: 'Marathi is a language spoken in the country of India.'});
    db.collection('mongolian').insertOne({funfact: 'Mongolian is a language spoken in the country of Mongolia.'});
    db.collection('mongolian').insertOne({funfact: 'Mongolian is a language spoken in the country of Mongolia.'});
    db.collection('mongolian').insertOne({funfact: 'Mongolian is a language spoken in the country of Mongolia.'});
    db.collection('nepali').insertOne({funfact: 'Nepali is a language spoken in the country of Nepal.'});
    db.collection('nepali').insertOne({funfact: 'Nepali is a language spoken in the country of Nepal.'});
    db.collection('nepali').insertOne({funfact: 'Nepali is a language spoken in the country of Nepal.'});
    db.collection('norwegian').insertOne({funfact: 'Norwegian is a language spoken in the country of Norway.'});
    db.collection('norwegian').insertOne({funfact: 'Norwegian is a language spoken in the country of Norway.'});
    db.collection('norwegian').insertOne({funfact: 'Norwegian is a language spoken in the country of Norway.'});
    db.collection('polish').insertOne({funfact: 'Polish is a language spoken in the country of Poland.'});
    db.collection('polish').insertOne({funfact: 'Polish is a language spoken in the country of Poland.'});
    db.collection('polish').insertOne({funfact: 'Polish is a language spoken in the country of Poland.'});
    db.collection('portuguese').insertOne({funfact: 'Portuguese is a language spoken in the country of Portugal.'});
    db.collection('portuguese').insertOne({funfact: 'Portuguese is a language spoken in the country of Portugal.'});
    db.collection('portuguese').insertOne({funfact: 'Portuguese is a language spoken in the country of Portugal.'});
    db.collection('punjabi').insertOne({funfact: 'Punjabi is a language spoken in the country of India.'});
    db.collection('punjabi').insertOne({funfact: 'Punjabi is a language spoken in the country of India.'});
    db.collection('punjabi').insertOne({funfact: 'Punjabi is a language spoken in the country of India.'});
    db.collection('romanian').insertOne({funfact: 'Romanian is a language spoken in the country of Romania.'});
    db.collection('romanian').insertOne({funfact: 'Romanian is a language spoken in the country of Romania.'});
    db.collection('romanian').insertOne({funfact: 'Romanian is a language spoken in the country of Romania.'});
    db.collection('russian').insertOne({funfact: 'Russian is a language spoken in the country of Russia.'});
    db.collection('russian').insertOne({funfact: 'Russian is a language spoken in the country of Russia.'});
    db.collection('russian').insertOne({funfact: 'Russian is a language spoken in the country of Russia.'});
    db.collection('samoan').insertOne({funfact: 'Samoan is a language spoken in the country of Samoa.'});
    db.collection('samoan').insertOne({funfact: 'Samoan is a language spoken in the country of Samoa.'});
    db.collection('samoan').insertOne({funfact: 'Samoan is a language spoken in the country of Samoa.'});
    db.collection('scots gaelic').insertOne({funfact: 'Scots Gaelic is a language spoken in the country of Scotland.'});
    db.collection('scots gaelic').insertOne({funfact: 'Scots Gaelic is a language spoken in the country of Scotland.'});
    db.collection('scots gaelic').insertOne({funfact: 'Scots Gaelic is a language spoken in the country of Scotland.'});
    db.collection('serbian').insertOne({funfact: 'Serbian is a language spoken in the country of Serbia.'});
    db.collection('serbian').insertOne({funfact: 'Serbian is a language spoken in the country of Serbia.'});
    db.collection('serbian').insertOne({funfact: 'Serbian is a language spoken in the country of Serbia.'});
    db.collection('sesotho').insertOne({funfact: 'Sesotho is a language spoken in the country of South Africa.'});
    db.collection('sesotho').insertOne({funfact: 'Sesotho is a language spoken in the country of South Africa.'});
    db.collection('sesotho').insertOne({funfact: 'Sesotho is a language spoken in the country of South Africa.'});
    db.collection('shona').insertOne({funfact: 'Shona is a language spoken in the country of Zimbabwe.'});
    db.collection('shona').insertOne({funfact: 'Shona is a language spoken in the country of Zimbabwe.'});
    db.collection('shona').insertOne({funfact: 'Shona is a language spoken in the country of Zimbabwe.'});
    db.collection('sinhala').insertOne({funfact: 'Sinhala is a language spoken in the country of Sri Lanka.'});
    db.collection('sinhala').insertOne({funfact: 'Sinhala is a language spoken in the country of Sri Lanka.'});
    db.collection('sinhala').insertOne({funfact: 'Sinhala is a language spoken in the country of Sri Lanka.'});
    db.collection('slovak').insertOne({funfact: 'Slovak is a language spoken in the country of Slovakia.'});
    db.collection('slovak').insertOne({funfact: 'Slovak is a language spoken in the country of Slovakia.'});
    db.collection('slovak').insertOne({funfact: 'Slovak is a language spoken in the country of Slovakia.'});
    db.collection('slovenian').insertOne({funfact: 'Slovenian is a language spoken in the country of Slovenia.'});
    db.collection('slovenian').insertOne({funfact: 'Slovenian is a language spoken in the country of Slovenia.'});
    db.collection('slovenian').insertOne({funfact: 'Slovenian is a language spoken in the country of Slovenia.'});
    db.collection('spanish').insertOne({funfact: 'Spanish is a language spoken in the country of Spain.'});
    db.collection('spanish').insertOne({funfact: 'Spanish is a language spoken in the country of Spain.'});
    db.collection('spanish').insertOne({funfact: 'Spanish is a language spoken in the country of Spain.'});
    db.collection('swahili').insertOne({funfact: 'Swahili is a language spoken in the country of Tanzania.'});
    db.collection('swahili').insertOne({funfact: 'Swahili is a language spoken in the country of Tanzania.'});
    db.collection('swahili').insertOne({funfact: 'Swahili is a language spoken in the country of Tanzania.'});
    db.collection('swedish').insertOne({funfact: 'Swedish is a language spoken in the country of Sweden.'});
    db.collection('swedish').insertOne({funfact: 'Swedish is a language spoken in the country of Sweden.'});
    db.collection('swedish').insertOne({funfact: 'Swedish is a language spoken in the country of Sweden.'});
    db.collection('tajik').insertOne({funfact: 'Tamil is a language spoken in the country of India.'});
    db.collection('tajik').insertOne({funfact: 'Tamil is a language spoken in the country of India.'});
    db.collection('tajik').insertOne({funfact: 'Tamil is a language spoken in the country of India.'});
    db.collection('tamil').insertOne({funfact: 'Tamil is a language spoken in the country of India.'});
    db.collection('tamil').insertOne({funfact: 'Tamil is a language spoken in the country of India.'});
    db.collection('tamil').insertOne({funfact: 'Tamil is a language spoken in the country of India.'});
    db.collection('telugu').insertOne({funfact: 'Telugu is a language spoken in the country of India.'});
    db.collection('telugu').insertOne({funfact: 'Telugu is a language spoken in the country of India.'});
    db.collection('telugu').insertOne({funfact: 'Telugu is a language spoken in the country of India.'});
    db.collection('thai').insertOne({funfact: 'Thai is a language spoken in the country of Thailand.'});
    db.collection('thai').insertOne({funfact: 'Thai is a language spoken in the country of Thailand.'});
    db.collection('thai').insertOne({funfact: 'Thai is a language spoken in the country of Thailand.'});
    db.collection('turkish').insertOne({funfact: 'Turkish is a language spoken in the country of Turkey.'});
    db.collection('turkish').insertOne({funfact: 'Turkish is a language spoken in the country of Turkey.'});
    db.collection('turkish').insertOne({funfact: 'Turkish is a language spoken in the country of Turkey.'});
    db.collection('ukrainian').insertOne({funfact: 'Ukrainian is a language spoken in the country of Ukraine.'});
    db.collection('ukrainian').insertOne({funfact: 'Ukrainian is a language spoken in the country of Ukraine.'});
    db.collection('ukrainian').insertOne({funfact: 'Ukrainian is a language spoken in the country of Ukraine.'});
    db.collection('uzbek').insertOne({funfact: 'Uzbek is a language spoken in the country of Uzbekistan.'});
    db.collection('uzbek').insertOne({funfact: 'Uzbek is a language spoken in the country of Uzbekistan.'});
    db.collection('uzbek').insertOne({funfact: 'Uzbek is a language spoken in the country of Uzbekistan.'});
    db.collection('vietnamese').insertOne({funfact: 'Vietnamese is a language spoken in the country of Vietnam.'});
    db.collection('vietnamese').insertOne({funfact: 'Vietnamese is a language spoken in the country of Vietnam.'});
    db.collection('vietnamese').insertOne({funfact: 'Vietnamese is a language spoken in the country of Vietnam.'});
    db.collection('welsh').insertOne({funfact: 'Welsh is a language spoken in the country of Wales.'});
    db.collection('welsh').insertOne({funfact: 'Welsh is a language spoken in the country of Wales.'});
    db.collection('welsh').insertOne({funfact: 'Welsh is a language spoken in the country of Wales.'});
    db.collection('xhosa').insertOne({funfact: 'Xhosa is a language spoken in the country of South Africa.'});
    db.collection('xhosa').insertOne({funfact: 'Xhosa is a language spoken in the country of South Africa.'});
    db.collection('xhosa').insertOne({funfact: 'Xhosa is a language spoken in the country of South Africa.'});
    db.collection('yiddish').insertOne({funfact: 'Yiddish is a language spoken in the country of Israel.'});
    db.collection('yiddish').insertOne({funfact: 'Yiddish is a language spoken in the country of Israel.'});
    db.collection('yiddish').insertOne({funfact: 'Yiddish is a language spoken in the country of Israel.'});
    db.collection('yoruba').insertOne({funfact: 'Yiddish is a language spoken in the country of Israel.'});
    db.collection('yoruba').insertOne({funfact: 'Yiddish is a language spoken in the country of Israel.'});
    db.collection('yoruba').insertOne({funfact: 'Yiddish is a language spoken in the country of Israel.'});
    db.collection('zulu').insertOne({funfact: 'Yiddish is a language spoken in the country of Israel.'});
    db.collection('zulu').insertOne({funfact: 'Yiddish is a language spoken in the country of Israel.'});
    db.collection('zulu').insertOne({funfact: 'Yiddish is a language spoken in the country of Israel.'});
}

connect();