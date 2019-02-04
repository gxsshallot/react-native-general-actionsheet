# react-native-general-actionsheet

[![npm version](https://img.shields.io/npm/v/react-native-general-actionsheet.svg?style=flat)](https://www.npmjs.com/package/react-native-general-actionsheet)
[![Build Status](https://travis-ci.org/gaoxiaosong/react-native-general-actionsheet.svg?branch=master)](https://travis-ci.org/gaoxiaosong/react-native-general-actionsheet)

[中文说明](https://www.jianshu.com/p/2377cca9a58c)

This is a general ActionSheet api. You can use [ActionSheetIOS](https://facebook.github.io/react-native/docs/actionsheetios) in iOS and use a custom view in Android. Or you can use custom view in both iOS and Android.

It only support `ActionSheet.showActionSheetWithOptions` now.

## ScreenShots

### Portrait

<p float="left">

<img src="/resource/iOS-1-P.png" height="400px">

<img src="/resource/iOS-2-P.png" height="400px">

<img src="/resource/Android-1-P.jpeg" height="400px">

<img src="/resource/Android-2-P.jpeg" height="400px">

</p>

### Landscape

<p float="left">

<img src="/resource/iOS-1-L.png" width="45%">

<img src="/resource/iOS-2-L.png" width="45%">

</p>

<p float="left">

<img src="/resource/Android-1-L.jpeg" width="45%">

<img src="/resource/Android-2-L.jpeg" width="45%">

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

## Use `ActionSheetIOS`

You can change using `ActionSheetIOS` or not globally:

```javascript
import ActionSheet from 'react-native-general-actionsheet';

ActionSheet.useActionSheetIOS = true/false;
```

## Customize Style

You can change style of container globally.

```javascript
import ActionSheet from 'react-native-general-actionsheet';

ActionSheet.Container.defaultProps.xxx = yyy;
```

It supports following properties:

| Name | Type | Description |
| :-: | :-: | :- |
| backgroundColor | string | Background color of whole view |
| contentBackgroundColor | string | Background color of content view |
| separatorColor | string | Separator line color |
| fontSize | number | Button text font size |
| color | string | Button text color |
| titleStyle | object | Style of title text |
| messageStyle | object | Style of message text |
| destructiveButtonStyle | object | Style of destructive button |
| cancelButtonStyle | object | Style of cancel button |
| touchableUnderlayColor | string | Underlay color of button touch action |
| supportedOrientations | array | Supported orientations for iOS |
