
if (typeof gdjs.evtsExt__WortalSDK__ScheduleNotificationAsync !== "undefined") {
  gdjs.evtsExt__WortalSDK__ScheduleNotificationAsync.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WortalSDK__ScheduleNotificationAsync = {};


gdjs.evtsExt__WortalSDK__ScheduleNotificationAsync.userFunc0x15761f0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const payloadVar = eventsFunctionContext.getArgument("Payload");
const payloadAsObj = gdjs._wortalExtension.gdevelopToJsObject(payloadVar);
const resultVariable = eventsFunctionContext.getArgument("Result");

Wortal.notifications.scheduleAsync(payloadAsObj)
.then(result => {
    if (result.success) {
        gdjs._wortalExtension.setResultValues(resultVariable, result);            
        console.log(`Notification scheduled successfully with ID: ${result.id}`);
    } else {
        console.warn("Notification scheduling failed.");
    }
})
.catch(error => {
    console.error("Error while scheduling notification:", error);
})
.finally(() => eventsFunctionContext.task.resolve());
};
gdjs.evtsExt__WortalSDK__ScheduleNotificationAsync.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WortalSDK__ScheduleNotificationAsync.userFunc0x15761f0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WortalSDK__ScheduleNotificationAsync.func = function(runtimeScene, Payload, Result, parentEventsFunctionContext) {
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
if (argName === "Payload") return Payload;
if (argName === "Result") return Result;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WortalSDK__ScheduleNotificationAsync.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__WortalSDK__ScheduleNotificationAsync.registeredGdjsCallbacks = [];