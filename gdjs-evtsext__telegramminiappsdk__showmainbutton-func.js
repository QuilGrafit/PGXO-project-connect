
if (typeof gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton !== "undefined") {
  gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton = {};


gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton.userFunc0xcb8120 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    const mainButton = window.Telegram.WebApp.MainButton;
    const buttonText = eventsFunctionContext.getArgument("text");
    const callbackFunctionName = eventsFunctionContext.getArgument("callbackFunctionName");

    mainButton.setText(buttonText);
    mainButton.show();

    // Remove previous listener to avoid multiple calls
    if (gdjs._telegramExtension.mainButtonClickListener) {
        mainButton.offClick(gdjs._telegramExtension.mainButtonClickListener);
    }

    // Add new listener if a callback function is provided
    if (callbackFunctionName) {
        gdjs._telegramExtension.mainButtonClickListener = () => {
            gdjs.evtTools.GDGDEvents.callFunction(callbackFunctionName);
        };
        mainButton.onClick(gdjs._telegramExtension.mainButtonClickListener);
    }
} catch (e) {
    console.error("Telegram Mini App SDK: Error showing Main Button:", e);
}
};
gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton.userFunc0xcb8120(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TelegramMiniAppSDK__IsRunningAsTelegramMiniApp.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton.func = function(runtimeScene, text, callbackFunctionName, parentEventsFunctionContext) {
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
if (argName === "text") return text;
if (argName === "callbackFunctionName") return callbackFunctionName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__TelegramMiniAppSDK__ShowMainButton.registeredGdjsCallbacks = [];