import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableHighlight, TouchableWithoutFeedback, Modal } from 'react-native';
import { getSafeAreaInset } from 'react-native-pure-navigation-bar';

export default class extends React.PureComponent {
    static defaultProps = {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        contentBackgroundColor: '#f9f9f9',
        separatorColor: '#d7d7d7',
        fontSize: 18,
        color: '#007aff',
        titleStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            color: '#8f8f8f',
        },
        messageStyle: {
            fontSize: 15,
            color: '#8f8f8f',
        },
        destructiveButtonStyle: {
            color: '#d11f1f',
        },
        cancelButtonStyle: {
            fontWeight: 'bold',
        },
        touchableUnderlayColor: '#dddddd',
        supportedOrientations: ['portrait', 'landscape'],
    };
    
    constructor(props) {
        super(props);
        this.state = {
            isLandscape: this._isLandscape(),
        };
    }

    componentDidMount() {
        Dimensions.addEventListener('change', this._onWindowChange);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this._onWindowChange);
    }

    render() {
        const { config, backgroundColor, supportedOrientations } = this.props;
        const { cancelButtonIndex } = config;
        const closeFunc = this._click.bind(this, cancelButtonIndex);
        return (
            <View style={[styles.view, {backgroundColor}]}>
                <Modal
                    visible={true}
                    supportedOrientations={supportedOrientations}
                    onRequestClose={closeFunc}
                    transparent={true}
                    animationType={'slide'}
                >
                    <TouchableWithoutFeedback style={styles.touchview} onPress={closeFunc}>
                        <View style={styles.touchview} />
                    </TouchableWithoutFeedback>
                    {this._renderSections()}
                </Modal>
            </View>
        );
    }

    _renderSections = () => {
        const {width, height} = Dimensions.get('window');
        const inset = getSafeAreaInset();
        const { config } = this.props;
        const { title, message, options, cancelButtonIndex } = config;
        const contentStyle = {
            paddingHorizontal: 10,
            marginBottom: inset.bottom > 0 ? inset.bottom : 10,
        };
        if (this.state.isLandscape) {
            contentStyle.width = Math.max(width / 3, height - 10 * 2);
            contentStyle.alignSelf = 'center';
        }
        const sections = [];
        let section = [];
        (title || message) && section.push(this._renderTitle(title, message));
        options.forEach((item, index) => {
            const itemView = this._renderItem(item, index);
            if (index === cancelButtonIndex) {
                sections.push(section);
                sections.push([itemView]);
                section = [];
            } else {
                section.push(itemView);
            }
        });
        section.length > 0 && sections.push(section);
        return (
            <View style={[styles.content, contentStyle]}>
                {sections.map((section, index) => {
                    const style = index > 0 ? {
                        marginTop: 9,
                    } : {};
                    return this._renderSection(section, index, style);
                })}
            </View>
        );
    };

    _renderTitle = (title, message) => {
        const { titleStyle, messageStyle } = this.props;
        const style = {marginVertical: 6};
        return (
            <View style={styles.title} key={'title'}>
                {title && (
                    <Text style={[style, titleStyle]}>
                        {title}
                    </Text>
                )}
                {message && (
                    <Text style={[style, messageStyle]}>
                        {message}
                    </Text>
                )}
            </View>
        )
    };

    _renderItem = (item, index) => {
        const { config, destructiveButtonStyle, cancelButtonStyle, touchableUnderlayColor, fontSize, color } = this.props;
        const { destructiveButtonIndex, cancelButtonIndex } = config;
        const isCancel = index === cancelButtonIndex;
        const isDestructive = index === destructiveButtonIndex;
        const textStyle = isCancel ? cancelButtonStyle :
            isDestructive ? destructiveButtonStyle :
            null;
        return (
            <TouchableHighlight
                key={index}
                style={styles.button}
                underlayColor={touchableUnderlayColor}
                onPress={this._click.bind(this, index)}
            >
                <View style={styles.buttonView}>
                    <Text style={[{fontSize, color}, textStyle]}>
                        {item}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    };

    _renderSection = (items, index, style) => {
        const {contentBackgroundColor: backgroundColor} = this.props;
        return (
            <View key={index} style={[styles.section, style, {backgroundColor}]}>
                {items.map((item, innerIndex) => {
                    const views = [item];
                    if (innerIndex < items.length - 1) {
                        views.push(this._renderSeparatorLine('sepline' + innerIndex));
                    }
                    return views;
                })}
            </View>
        );
    };

    _renderSeparatorLine = (key) => {
        const {separatorColor: backgroundColor} = this.props;
        return <View key={key} style={[styles.seperator, {backgroundColor}]} />;
    };

    _click = (index) => {
        this.props.callback && this.props.callback(index);
    };

    _isLandscape = () => {
        const { width, height } = Dimensions.get('window');
        return width > height;
    };

    _onWindowChange = () => {
        this.setState({isLandscape: this._isLandscape()});
    };
}

const styles = StyleSheet.create({
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 1,
    },
    touchview: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    content: {
        flex: 0,
    },
    section: {
        borderRadius: 11,
        overflow: 'hidden',
    },
    seperator: {
        height: StyleSheet.hairlineWidth,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        height: 57,
    },
    buttonView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});