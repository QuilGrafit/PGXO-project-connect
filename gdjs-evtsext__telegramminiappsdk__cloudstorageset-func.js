
if (typeof gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet !== "undefined") {
  gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet = {};


gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet.userFunc0x932c18 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const key = eventsFunctionContext.getArgument("key");
const value = eventsFunctionContext.getArgument("value");
const successEvent = eventsFunctionContext.getEventsFunctionContext("successEvent");

if (window.Telegram.WebApp.CloudStorage) {
    try {
        window.Telegram.WebApp.CloudStorage.set(key, value, (err, success) => {
            if (success) {
                console.info(`Cloud Storage: Key '${key}' set successfully.`);
                if (successEvent) {
                    eventsFunctionContext.resolveAsyncEventsFunction(successEvent);
                }
            } else if (err) {
                console.error(`Cloud Storage: Failed to set key '${key}':`, err);
                eventsFunctionContext.failAsyncEventsFunction("Failed to set cloud storage key: " + err);
            } else {
                console.error(`Cloud Storage: Failed to set key '${key}'. Unknown error.`);
                eventsFunctionContext.failAsyncEventsFunction("Failed to set cloud storage key: Unknown error.");
            }
        });
    } catch (e) {
        console.error("Telegram Mini App SDK: Error calling CloudStorage.set:", e);
        eventsFunctionContext.failAsyncEventsFunction("Error calling CloudStorage.set: " + e.message);
    }
} else {
    console.warn("Telegram Mini App SDK: Cloud Storage is not available.");
    eventsFunctionContext.failAsyncEventsFunction("Cloud Storage not available.");
}
};
gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet.userFunc0x932c18(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TelegramMiniAppSDK__IsRunningAsTelegramMiniApp.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet.func = function(runtimeScene, key, value, successEvent, parentEventsFunctionContext) {
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
if (argName === "value") return value;
if (argName === "successEvent") return successEvent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet.eventsList1(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__TelegramMiniAppSDK__CloudStorageSet.registeredGdjsCallbacks = [];