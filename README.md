# React Localization App

- Localization using react-intl

## How to add localization in react-app
- Install react-intl
```sh
npm install react-intl --save
```

- Create folder named locale in src directory and put locale json files in it.
- Example json file is:
```sh
{
    "Inbox": "In",
    "Starred": "Starred",
    "Send email": "Send email",
    "Drafts": "Drafts",
    "All mail": "All mail",
    "Trash": "Trash",
    "Spam": "Spam",
    "Responsive drawer": "Responsive drawer"
}
```

- Create index file in locale folder and import all locale files in it.
```sh
import en_US from "./en-US.json";

export default { en_US }
```

- In main index.js file import this index file.
```sh
import translations from "./locale";
```

- Add variables to detect browser language, use navigator.language to detect browser language, if locale file is not present or string is not present in locale file then it will use default message
```sh
const locale = "en_US"; //navigator.language
const messages = translations[locale];
```

- Wrap app component by IntlProvider in index.js file. Pass locale and messages props to IntlProvider component.
```sh
ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={"en"} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

- Now add FormattedMessage to localize the string.
- import FormattedMessage in component to use localization.
```sh
import { FormattedMessage } from "react-intl";
```

- Use FormattedMessage to display string. Id is used to get string from json file and defaultMessage is used when locale file is not present or string is not present in locale file.
```sh
<FormattedMessage id={text} defaultMessage={text} />
```

You can try changing string value in json file to see how it works.