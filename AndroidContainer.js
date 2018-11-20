import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Modal } from 'react-native';

export default class extends React.PureComponent {
    render() {
        const { title, message, options, cancelButtonIndex } = this.props.config;
        return (
            <Modal
                visible={true}
                supportedOrientations={['portrait', 'landscape']}
                onRequestClose={this._click.bind(this, cancelButtonIndex)}
                transparent={true}
                animationType={'slide'}
            >
                <View style={styles.content}>
                    {title && (
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                                {title}
                            </Text>
                        </View>
                    )}
                    {message && (
                        <View style={styles.message}>
                            <Text>
                                {message}
                            </Text>
                        </View>
                    )}
                    <View>
                        {options.map(this._renderItem)}
                    </View>
                </View>
            </Modal>
        );
    }

    _renderItem = (item, index) => {
        const { destructiveButtonIndex, cancelButtonIndex } = this.props.config;
        const isCancel = index === cancelButtonIndex;
        const isDestructive = index === destructiveButtonIndex;
        return (
            <View
                key={index}
                style={isCancel ? styles.cancelBtn : null}
            >
                <TouchableHighlight
                    style={styles.btn}
                    underlayColor='#dddddd'
                    onPress={this._click.bind(this, index)}
                >
                    <Text style={isDestructive ? styles.destructiveBtn : null}>
                        {item}
                    </Text>
                </TouchableHighlight>
                {isCancel && <View style={styles.cancelBtnMask} />}
            </View>
        );
    };

    _click = (index) => {
        this.props.callback && this.props.callback(index);
    };
}

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    titleText: {
        fontWeight: '500'
    },
    message: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        height: 42,
        borderStyle: 'solid',
        borderTopWidth: 0.5,
        borderTopColor: '#e6e8ea',
        backgroundColor: 'white'
    },
    cancelBtn: {
        marginTop: 9,
        position: 'relative'
    },
    cancelBtnMask: {
        position: 'absolute',
        top: -9,
        left: 0,
        right: 0,
        height: 9,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    },
    destructiveBtn: {
        color: '#d11f1f',
        fontSize: 14,
    },
});