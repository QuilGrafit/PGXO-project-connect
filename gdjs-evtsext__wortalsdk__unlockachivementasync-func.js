
if (typeof gdjs.evtsExt__WortalSDK__UnlockAchivementAsync !== "undefined") {
  gdjs.evtsExt__WortalSDK__UnlockAchivementAsync.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WortalSDK__UnlockAchivementAsync = {};


gdjs.evtsExt__WortalSDK__UnlockAchivementAsync.userFunc0xd1ee98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const achievementName = eventsFunctionContext.getArgument("AchievementName");
const isUnclocked = eventsFunctionContext.getArgument("IsUnlockedVariable");
Wortal.achievements.unlockAchievementAsync(achievementName)
.then((unlocked) => {
    if(unlocked) {
        isUnclocked.setBoolean(true);
    } else {
        isUnclocked.setBoolean(false);
    }
})
.catch(error => {
    console.warn("Failed to unlock achivement:", error);
})
.finally(() => eventsFunctionContext.task.resolve());
};
gdjs.evtsExt__WortalSDK__UnlockAchivementAsync.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WortalSDK__UnlockAchivementAsync.userFunc0xd1ee98(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WortalSDK__UnlockAchivementAsync.func = function(runtimeScene, AchievementName, IsUnlockedVariable, parentEventsFunctionContext) {
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
if (argName === "AchievementName") return AchievementName;
if (argName === "IsUnlockedVariable") return IsUnlockedVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WortalSDK__UnlockAchivementAsync.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__WortalSDK__UnlockAchivementAsync.registeredGdjsCallbacks = [];