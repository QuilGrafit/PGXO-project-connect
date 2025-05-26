
if (typeof gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData !== "undefined") {
  gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData = {};


gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData.userFunc0x1284720 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Ensure the gdjs._telegramExtension object exists
if (typeof gdjs._telegramExtension === 'undefined') {
    gdjs._telegramExtension = {
        isSdkLoaded: false,
        pendingCallbacks: [],
        initializeCallback: null
    };
}

// Define the initialization logic that runs after the SDK is loaded
const runInitialization = () => {
    if (typeof window.Telegram !== 'undefined' && typeof window.Telegram.WebApp !== 'undefined') {
        const webApp = window.Telegram.WebApp;

        // Set user data in global variables
        if (webApp.initDataUnsafe && webApp.initDataUnsafe.user) {
            const user = webApp.initDataUnsafe.user;
            gdjs.ProjectData.globalVariables.get("TelegramUserID").setString(user.id ? user.id.toString() : "");
            gdjs.ProjectData.globalVariables.get("TelegramUserFirstName").setString(user.first_name || "");
            gdjs.ProjectData.globalVariables.get("TelegramUserLastName").setString(user.last_name || "");
            gdjs.ProjectData.globalVariables.get("TelegramUserUsername").setString(user.username || "");
            console.info("Telegram Mini App: User Data Loaded.", user);
        } else {
            console.warn("Telegram Mini App: No user data found in initDataUnsafe. Setting default values.");
            gdjs.ProjectData.globalVariables.get("TelegramUserID").setString("NOT_TELEGRAM_MINI_APP");
            gdjs.ProjectData.globalVariables.get("TelegramUserFirstName").setString("NOT_TELEGRAM_MINI_APP");
            gdjs.ProjectData.globalVariables.get("TelegramUserLastName").setString("NOT_TELEGRAM_MINI_APP");
            gdjs.ProjectData.globalVariables.get("TelegramUserUsername").setString("NOT_TELEGRAM_MINI_APP");
        }

        // Set theme parameters in global variables
        if (webApp.themeParams) {
            const theme = webApp.themeParams;
            gdjs.ProjectData.globalVariables.get("TelegramThemeBgColor").setString(theme.bg_color || "");
            gdjs.ProjectData.globalVariables.get("TelegramThemeTextColor").setString(theme.text_color || "");
            gdjs.ProjectData.globalVariables.get("TelegramThemeHintColor").setString(theme.hint_color || "");
            gdjs.ProjectData.globalVariables.get("TelegramThemeLinkColor").setString(theme.link_color || "");
            gdjs.ProjectData.globalVariables.get("TelegramThemeButtonColor").setString(theme.button_color || "");
            gdjs.ProjectData.globalVariables.get("TelegramThemeButtonTextColor").setString(theme.button_text_color || "");
            gdjs.ProjectData.globalVariables.get("TelegramThemeSecondaryBgColor").setString(theme.secondary_bg_color || "");
            console.info("Telegram Mini App: Theme Params Loaded.", theme);
        } else {
            console.warn("Telegram Mini App: Theme parameters not found. Setting default values.");
        }

        // Inform Telegram that the Mini App is ready
        webApp.ready();
        console.info("Telegram Mini App is ready.");
    } else {
        console.warn("Telegram WebApp object not found. Not running as Telegram Mini App or script not loaded.");
        // Ensure variables are still set to indicate not in Mini App context if script fails to load
        gdjs.ProjectData.globalVariables.get("TelegramUserID").setString("NOT_TELEGRAM_MINI_APP");
        gdjs.ProjectData.globalVariables.get("TelegramUserFirstName").setString("NOT_TELEGRAM_MINI_APP");
        gdjs.ProjectData.globalVariables.get("TelegramUserLastName").setString("NOT_TELEGRAM_MINI_APP");
        gdjs.ProjectData.globalVariables.get("TelegramUserUsername").setString("NOT_TELEGRAM_MINI_APP");
    }
};

// Load Telegram WebApp script if not already loaded
if (!gdjs._telegramExtension.isSdkLoaded) {
    console.info("Telegram Mini App SDK: Loading telegram-web-app.js...");
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js';
    script.async = true;
    script.onload = () => {
        gdjs._telegramExtension.isSdkLoaded = true;
        console.info("Telegram Mini App SDK: telegram-web-app.js loaded.");
        runInitialization();
        // Run any pending callbacks if any
        gdjs._telegramExtension.pendingCallbacks.forEach(cb => cb());
        gdjs._telegramExtension.pendingCallbacks = [];
    };
    script.onerror = (e) => {
        console.error("Telegram Mini App SDK: Failed to load telegram-web-app.js", e);
        gdjs._telegramExtension.isSdkLoaded = false; // Mark as failed to load
        runInitialization(); // Still attempt initialization, though it will likely fail to get data
    };
    document.head.appendChild(script);
} else {
    // If already loaded, just run initialization
    runInitialization();
}
};
gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData.userFunc0x1284720(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TelegramMiniAppSDK"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TelegramMiniAppSDK"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData.registeredGdjsCallbacks = [];