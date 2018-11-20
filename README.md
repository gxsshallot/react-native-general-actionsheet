# react-native-general-actionsheet

[![npm version](https://img.shields.io/npm/v/react-native-general-actionsheet.svg?style=flat)](https://www.npmjs.com/package/react-native-general-actionsheet)

This is a general ActionSheet api. It uses [ActionSheetIOS](https://facebook.github.io/react-native/docs/actionsheetios) in iOS. And use a custom view in Android.

It only support `ActionSheet.showActionSheetWithOptions` now.

## ScreenShots

<p float="left">

<img src="/resource/iOS.png" width="45%">

<img src="/resource/Android.jpeg" width="45%">

</p>

## Install

Install by Yarn:

```shell
yarn add react-native-general-actionsheet
```

Install by NPM:

```shell
npm install --save react-native-general-actionsheet
```

## Usage

Use the module in file:

```javascript
import ActionSheet from 'react-native-general-actionsheet';

ActionSheet.showActionSheetWithOptions(options, callback);
```

Parameters `options` and `callback` is same as [ActionSheetIOS](https://facebook.github.io/react-native/docs/actionsheetios).

## Customize Style

You can change style of `AndroidContainer` globally.

```javascript
import { AndroidContainer } from 'react-native-general-actionsheet';

AndroidContainer.defaultProps.xxx = yyy;
```

It supports following properties:

| Name | Type | Description |
| :-: | :-: | :- |
| backgroundColor | string | Background color of whole view |
| destructiveButtonStyle | object | Style of destructive button |
| cancelButtonStyle | object | Style of cancel button |
| touchableUnderlayColor | string | Underlay color of button touch action |
| supportedOrientations | array | Supported orientations for iOS |