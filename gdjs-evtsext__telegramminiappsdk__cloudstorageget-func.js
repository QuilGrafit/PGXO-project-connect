
if (typeof gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet !== "undefined") {
  gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet = {};


gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet.userFunc0xd09e60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const key = eventsFunctionContext.getArgument("key");
const resultVar = eventsFunctionContext.getArgument("resultVariable");
const successEvent = eventsFunctionContext.getEventsFunctionContext("successEvent");

if (window.Telegram.WebApp.CloudStorage) {
    try {
        window.Telegram.WebApp.CloudStorage.get(key, (err, value) => {
            if (!err) {
                resultVar.setString(value || ""); // Set to empty string if null/undefined
                console.info(`Cloud Storage: Key '${key}' retrieved successfully:`, value);
                if (successEvent) {
                    eventsFunctionContext.resolveAsyncEventsFunction(successEvent);
                }
            } else {
                console.error(`Cloud Storage: Failed to get key '${key}':`, err);
                resultVar.setString("ERROR"); // Indicate error in variable
                eventsFunctionContext.failAsyncEventsFunction("Failed to get cloud storage key: " + err);
            }
        });
    } catch (e) {
        console.error("Telegram Mini App SDK: Error calling CloudStorage.get:", e);
        resultVar.setString("ERROR");
        eventsFunctionContext.failAsyncEventsFunction("Error calling CloudStorage.get: " + e.message);
    }
} else {
    console.warn("Telegram Mini App SDK: Cloud Storage is not available.");
    resultVar.setString("NOT_AVAILABLE");
    eventsFunctionContext.failAsyncEventsFunction("Cloud Storage not available.");
}
};
gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet.userFunc0xd09e60(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TelegramMiniAppSDK__IsRunningAsTelegramMiniApp.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet.func = function(runtimeScene, key, resultVariable, successEvent, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "key") return key;
if (argName === "resultVariable") return resultVariable;
if (argName === "successEvent") return successEvent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet.eventsList1(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageGet.registeredGdjsCallbacks = [];