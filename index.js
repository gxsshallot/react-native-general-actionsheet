import React from 'react';
import { ActionSheetIOS, Platform } from 'react-native';
import ActionSheetContainer from './ActionSheetContainer';
import RootSiblings from 'react-native-root-siblings';

let instance = null;

const ActionSheet = {
    Container: ActionSheetContainer,
    useActionSheetIOS: true,
    showActionSheetWithOptions: (config, callback) => {
        if (Platform.OS === 'ios' && ActionSheet.useActionSheetIOS) {
            ActionSheetIOS.showActionSheetWithOptions(config, callback);
            return;
        }
        if (instance) {
            return;
        }
        instance = new RootSiblings(
            <ActionSheet.Container
                config={config}
                callback={(index) => {
                    instance && instance.destroy(() => {
                        instance = null;
                        setTimeout(() => {
                            callback && callback(index);
                        }, 0);
                    });
                }}
            />
        );
    },
};

export default ActionSheet;