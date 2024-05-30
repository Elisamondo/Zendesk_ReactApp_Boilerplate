# Zendesk Internal App Scaffold

Based on ZCLI scaffold provided by Zendesk under the Apache 2.0 license.

**Changes made from original scaffold:**

- Tailwind included.
- Default icons changed to Appamondo logo.
- main.js module included to separate Zendesk functionality from internal app, replacing example app
- spec file included for main.js, some tests for ZAF Client functions removed.

find original information [here](https://github.com/zendesk/app_scaffolds)

## How to Run + Requirements

- Running locally requires a live Zendesk instance appended with ```?zcli_apps=true``` in URL
- NPM is the expected package manager but alternative such as Yarn will work with some adjustment
- Node 18 or greater expected

**on start**
```npm i```

**on changes**
```npm run build```

**run locally**
```npm run start```

**Testing**
```npm test```

## Notes on testing

Any integration testing from App.spec.js **must** include the following lines of code:
```CLIENT.request = jest.fn().mockReturnValueOnce(Promise.resolve(ORGANIZATIONS))```
```CLIENT.invoke = jest.fn().mockReturnValue(Promise.resolve({}))```
and be inside the "example app" describe or integration testing is not possible, or at least much more difficult
without the above lines, the app will fail to initialise due to an unfulfilled promise
