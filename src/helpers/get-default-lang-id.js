import displayLanguages from '../constants/display-languages';

// strip country code from langId
// en-US => en / vi-vn => vi
const getLanguageCode = (langId) => {
  const parts = langId.toLowerCase().replace('_', '-').split('-');

  return parts[0];
};

const getDefaultLangId = () => {
  /* global remote */
  const userLanguages = [remote.app.getLocale()];

  let defaultLangId = 'en';

  userLanguages.some((userLang) => {
    let isMatch = false;

    Object.keys(displayLanguages).some((appLang) => {
      isMatch = getLanguageCode(appLang) === getLanguageCode(userLang);

      if (isMatch) {
        defaultLangId = appLang;
      }

      return isMatch;
    });

    return isMatch;
  });

  return defaultLangId;
};

export default getDefaultLangId;
