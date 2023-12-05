import en from './translations/en.json'
import fr from './translations/fr.json'

const translations = {
    en: en,
    fr: fr
};
export function changeLanguage(lang) {
    console.log("changing language to "+lang)
    import(`./translations/${lang}.json`)
        .then((translations) => {
            console.log("data = ",this.$data)
            this.$data.translations[lang] = translations;
            //console.log("this.$data.translations[lang] = ",this.$data.translations[newLang])
        })
        .catch((error) => {
            console.error(`Failed to load translations for ${lang}`, error);
        });
    this.$store.state.lang = lang;
    console.log(this.$store.getters.getLang)
}
export function translate(key) {
    const lang = this.$store.getters.getLang;
    if (!(lang in translations)) {
        console.error(`Language ${lang} not supported`);
        return key;
    }

    const translation = translations[lang][key];

    if (!translation) {
        console.warn(`Translation for key ${key} not found in ${lang}`);
        return key;
    }

    return translation;
}
