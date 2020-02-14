import React, { PureComponent } from 'react';
import { View, Image, Text, Animation } from '@hippy/react';

import { StyleSheet } from '@hippy/react';

const styles = StyleSheet.create({
    messageBox: {
        height: 21,
        marginRight: 8,
        borderRadius: 3,
        backgroundColor: '#f3f8fe',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    messageIcon: {
        width: 16,
        height: 16,
        marginHorizontal: 3
    },
    message: {
        width: 1000,
        flexDirection: 'row',
        height: 21,
        overflow: 'hidden',
    },
    messageText: {
        lineHeight: 21,
        fontSize: 10,
        color: '#666666',
        whiteSpace: 'nowrap'
    }
});


export default class TextLoopScrollView extends PureComponent {
    constructor(props) {
        super(props);
        this.moveAnim = null;
    }

    componentWillMount() {
        if (!this.moveAnim) {
            this.moveAnim = new Animation({
                mode: 'timing',
                startValue: 0,
                toValue: 0,
                duration: 5000,
                timingFunction: 'linear',
                repeatCount: 'loop'
            });
        }
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    componentWillUnmount() {
        this.moveAnim && this.destroyAnim();
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    destroyAnim = () => {
        if (this.moveAnim) {
            this.moveAnim.destroy();
            this.moveAnim = null;
        }
    };

    _animate() {
        const { scrollWidth } = this.props;
        if (this._width < scrollWidth - 16) {
            return;
        }

        this.moveAnim.updateAnimation({
            startValue: 0,
            toValue: -this._width / 2,
            duration: this._width * 12
        });
        this.moveAnim.start();
    }

    render() {

        const { scrollWidth, frontImageUrl, message, onClickHandler } = this.props;

        if (!message || !scrollWidth) return null;
        const text = message + message;
        return (
            <View
                onClick={(e) => {
                    if (onClickHandler && typeof onClickHandler === 'function') {
                        onClickHandler(e);
                    }
                }}
                style={[styles.messageBox,{width: scrollWidth}]}
            >
                {
                    frontImageUrl ? <Image
                        style={styles.messageIcon}
                        source={{ uri: frontImageUrl }}
                    ></Image> : null
                }
                <View
                    style={styles.message}
                >
                    <Text
                        onLayout={e => {
                            this._width = e.layout.width;
                            this.timer = setTimeout(() => {
                                this._animate();
                            }, 0);
                        }}
                        style={[styles.messageText, { transform: [{ translateX: this.moveAnim }] }]}
                    >
                        {text}
                    </Text>
                </View>
            </View>

        );

    }
}
