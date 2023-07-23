import i18next from "i18next";
import {
    initReactI18next,
} from "react-i18next";

import en from "./en/index.js";
import ru from "./ru/index.js";
import uk from "./uk/index.js";

const resources = {
    en,
    ru,
    uk,
};

i18next
.use(initReactI18next)
.init({
    compatibilityJSON: "v3",
    resources,
    lng: "ru",
});