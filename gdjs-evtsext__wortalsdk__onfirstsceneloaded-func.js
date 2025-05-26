
if (typeof gdjs.evtsExt__WortalSDK__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WortalSDK__onFirstSceneLoaded = {};


gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.userFunc0xcf2f68 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const gdevelopToJsObject = (structureVar) => {
    const result = {};
    for (const key in structureVar._children) {
        if (structureVar.hasChild(key)) {
            const child = structureVar.getChild(key);

            if (child.isStructure()) {
                result[key] = gdevelopToJsObject(child);
            } else {
                result[key] = child.getValue();
            }
        }
    }

    return result;
};
const isObjectEmpty = (obj) => {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}
function setResultValues(resultVarChild, result) {
    Object.keys(result).forEach(key => {
        const value = result[key];
        const valueType = typeof value;
        switch(valueType) {
            case "string":
                resultVarChild.getChild(key).setString(value);
                break;
            case "number":
                resultVarChild.getChild(key).setNumber(value);
                break;
            case "boolean":
                resultVarChild.getChild(key).setBoolean(value);
                break;
            case "object":
                setResultValues(resultVarChild, value);
                break;
            default:
                console.warn(`Unsupported data type for key: ${key}`);
                resultVarChild.getChild(key).setString("");
        }
    });
}
function setResultToVarableCallback(results, resultsVar) {
    if (results && results.length) {
        resultsVar.clearChildren();
        results.forEach((result, index) => {
            const resultVarChild = resultsVar.getChild(index.toString());
            setResultValues(resultVarChild, result);
        });
    }
}
gdjs._wortalExtension = {
    isSdkReady: false,
    isShowingAd: false,
    hasAdJustFinishedShowing: false,
    shouldRewardPlayer: false,
    gdevelopToJsObject,
    isObjectEmpty,
    setResultToVarableCallback,
    setResultValues,
};
const script = document.createElement('script');
script.src = 'https://storage.googleapis.com/cdn-wortal-ai/v2/wortal-core.js';
script.async = true;
document.head.appendChild(script);
script.onload = function() {
    Wortal.initializeAsync().then(() => {
        gdjs._wortalExtension.isSdkReady = true;
    });
};
};
gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.userFunc0xcf2f68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__WortalSDK__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
