
if (typeof gdjs.evtsExt__WortalSDK__CancelAllNotificationsAsync !== "undefined") {
  gdjs.evtsExt__WortalSDK__CancelAllNotificationsAsync.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WortalSDK__CancelAllNotificationsAsync = {};


gdjs.evtsExt__WortalSDK__CancelAllNotificationsAsync.userFunc0xcf23b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const labelVar = eventsFunctionContext.getArgument("Label");
const label = labelVar ? labelVar : undefined;

const cancelNotifications = label => {
    const cancelPromise = label 
        ? Wortal.notifications.cancelAllAsync(label) 
        : Wortal.notifications.cancelAllAsync();

    cancelPromise
        .then(result => {
            console.log(`Notifications cancelled successfully: ${result}`);
        })
        .catch(error => {
            console.warn("Failed to cancel notifications:", error);
        })
        .finally(() => eventsFunctionContext.task.resolve());
};

cancelNotifications(label);
};
gdjs.evtsExt__WortalSDK__CancelAllNotificationsAsync.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WortalSDK__CancelAllNotificationsAsync.userFunc0xcf23b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WortalSDK__CancelAllNotificationsAsync.func = function(runtimeScene, Label, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WortalSDK"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WortalSDK"),
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
if (argName === "Label") return Label;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WortalSDK__CancelAllNotificationsAsync.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__WortalSDK__CancelAllNotificationsAsync.registeredGdjsCallbacks = [];