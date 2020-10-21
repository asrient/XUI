import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    View,
    Text,
    Pressable,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import ss from './sharedStyles';

class Spacer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var style = {}
        if (this.props.size) {
            if (this.props.h) {
                style.width = this.props.size
            }
            else
                style.height = this.props.size
        }
        else
            style.height = 10
        return (<View style={style}></View>)
    }
}

class Icon extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var style = {
            height: this.props.size || 12,
            width: this.props.size || 12,
            marginHorizontal: this.props.marginH || this.props.margin || 6,
            marginVertical: this.props.marginV || this.props.margin || 4,
            resizeMode: 'cover'
        }
        if (this.props.noMargin) {
            style.marginHorizontal = 0;
            style.marginVertical = 0;
        }
        if (this.props.color) {
            style.tintColor = this.props.color;
        }
        var img = (<Image
            style={style}
            source={this.props.source}
        />)
        if (this.props.onPress) {
            return (<Pressable android_ripple={{
                radius: this.props.size || 12,
                color: 'rgba(128,128,128,0.5)',
                borderless: false
            }} onPress={() => {
                if (this.props.onPress && !this.props.loading) {
                    this.props.onPress()
                }
            }} style={({ pressed }) => {
                if (!pressed || this.props.loading)
                    return {}
                else
                    return { opacity: 0.7 }
            }}>
                {img}
            </Pressable>)
        }
        else
            return img
    }
}

/**
 * @icon eg: require('path/file.png')
 */

class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    content(txtSize, inkStyle) {
        if (this.props.loading) {
            return (<ActivityIndicator color={inkStyle.color} />)
        }
        else if (this.props.icon) {
            return (<>
                <Icon size={11} source={this.props.icon} />
                <Text style={[ss.center, txtSize, inkStyle]}>{this.props.children}</Text>
            </>)
        }
        return (<Text style={[ss.center, txtSize, inkStyle]}>{this.props.children}</Text>)
    }
    render() {
        var buttStyles = [ss.button];
        var inkStyle = ss.ink_white;
        var txtSize = ss.size_s;
        var rippleRadius = 100;
        if (this.props.size)
            txtSize = ss['size_' + this.props.size]
        if (this.props.bordered) {
            if (this.props.color) {
                buttStyles.push(ss['button_bordered_' + this.props.color])
                inkStyle = ss['ink_' + this.props.color]
            }
            else {
                buttStyles.push(ss['button_bordered'])
                inkStyle = ss.ink_blue
            }
        }
        else if (this.props.color) {
            buttStyles.push(ss['button_' + this.props.color])
            switch (this.props.color) {
                case ('white'): {
                    inkStyle = ss.ink_white;
                    break;
                }
                case ('light'): {
                    inkStyle = ss.ink_dark;
                    break;
                }
                case ('grey'): {
                    inkStyle = ss.ink_black;
                    break;
                }
                case ('dark'): {
                    inkStyle = ss.ink_light;
                    break;
                }
                case ('black'): {
                    inkStyle = ss.ink_white;
                    break;
                }
                default: {
                    inkStyle = ss.ink_white
                }
            }
        }

        if (this.props.stretch) {
            buttStyles.push(ss.stretch)
            rippleRadius = 300
        }
        if (this.props.rounded) {
            buttStyles.push(ss.button_rounded)
        }
        if (this.props.large) {
            buttStyles.push(ss.button_l)
        }
        if (this.props.edged) {
            buttStyles.push(ss.button_edged)
        }
        if (this.props.glow) {
            var color = this.props.color || 'blue'
            buttStyles.push({
                shadowColor: ss.c[color],
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.43,
                shadowRadius: 10,
                elevation: 25,
            })
        }
        if (this.props.minWidth) {
            buttStyles.push({ minWidth: this.props.minWidth })
        }
        return (
            <Pressable android_ripple={{ radius: rippleRadius, color: inkStyle, borderless: false }} onPress={() => {
                if (this.props.onPress && !this.props.loading) {
                    this.props.onPress()
                }
            }} style={({ pressed }) => {
                if (!pressed || this.props.loading)
                    return buttStyles
                else
                    return [...buttStyles, { opacity: 0.7 }]
            }}>
                {this.content(txtSize, inkStyle)}
            </Pressable>)
    }
};

export { Button, Spacer, Icon }