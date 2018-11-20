import React from 'react';
import { ActionSheetIOS, Platform } from 'react-native';
import AndroidContainer from './AndroidContainer';
import RootSiblings from 'react-native-root-siblings';

let ActionSheet = ActionSheetIOS;

if (Platform.OS !== 'ios') {
    let instance = null;
    const cb = (callback, index) => {
        const oldInstance = instance;
        instance = null;
        if (index !== undefined) {
            callback && callback(index);
        }
        oldInstance && oldInstance.destroy();
    };
    ActionSheet = {
        showActionSheetWithOptions: (config, callback) => {
            if (instance) {
                return null;
            }
            instance = new RootSiblings(
                <AndroidContainer
                    config={config}
                    callback={(index) => cb(callback, index)}
                />
            );
        },
    };
}

export default ActionSheet;

export {
    AndroidContainer,
};