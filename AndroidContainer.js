import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableWithoutFeedback, Modal } from 'react-native';

export default class extends React.PureComponent {
    static defaultProps = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        destructiveButtonStyle: {
            fontSize: 14,
            color: '#d11f1f',
        },
        cancelButtonStyle: {
        },
        touchableUnderlayColor: '#dddddd',
        supportedOrientations: ['portrait', 'landscape'],
    };

    render() {
        const { config, backgroundColor, supportedOrientations } = this.props;
        const { title, message, options, cancelButtonIndex } = config;
        const closeFunc = this._click.bind(this, cancelButtonIndex);
        return (
            <Modal
                visible={true}
                supportedOrientations={supportedOrientations}
                onRequestClose={closeFunc}
                transparent={true}
                animationType={'slide'}
            >
                <View style={[styles.view, {backgroundColor}]}>
                    <TouchableWithoutFeedback style={styles.touch} onPress={closeFunc}>
                        <View style={styles.touchview} />
                    </TouchableWithoutFeedback>
                    <View style={styles.content}>
                        {title && (
                            <View style={styles.title} key={'title'}>
                                <Text style={styles.titleText}>
                                    {title}
                                </Text>
                            </View>
                        )}
                        {message && (
                            <View style={styles.message} key={'message'}>
                                <Text>
                                    {message}
                                </Text>
                            </View>
                        )}
                        {options.map(this._renderItem)}
                    </View>
                </View>
            </Modal>
        );
    }

    _renderItem = (item, index) => {
        const { config, destructiveButtonStyle, cancelButtonStyle, touchableUnderlayColor } = this.props;
        const { destructiveButtonIndex, cancelButtonIndex } = config;
        const isCancel = index === cancelButtonIndex;
        const isDestructive = index === destructiveButtonIndex;
        const textStyle = isCancel ? cancelButtonStyle :
            isDestructive ? destructiveButtonStyle :
            null;
        return (
            <TouchableHighlight
                key={index}
                style={[styles.button, isCancel ? styles.cancelBtn : null]}
                underlayColor={touchableUnderlayColor}
                onPress={this._click.bind(this, index)}
            >
                <View style={styles.buttonView}>
                    <Text style={textStyle}>
                        {item}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    };

    _click = (index) => {
        this.props.callback && this.props.callback(index);
    };
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    touch: {
        flex: 1,
    },
    touchview: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    content: {
        flex: 0,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: 'white',
    },
    titleText: {
        fontWeight: '500'
    },
    message: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        height: 42,
        borderStyle: 'solid',
        borderTopWidth: 0.5,
        borderTopColor: '#e6e8ea',
        backgroundColor: 'white'
    },
    buttonView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelBtn: {
        marginTop: 9,
    },
});