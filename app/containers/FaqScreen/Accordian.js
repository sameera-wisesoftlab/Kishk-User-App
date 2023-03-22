import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
  I18nManager,
} from 'react-native';
import {styles, images} from './styles';
import HTML from 'react-native-render-html';
import globals from '../../lib/globals';

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    const lang = I18nManager.isRTL ? 'ar' : 'en';
    let _data = this.props.data;

    let faqContent = '<html></html>';
    try {
      let html = _data.trim();
      html = html
        .replace(
          /<p><strong>/g,
          '<br><span style="marginTop:10;fontSize: 13;line-height:30px;font-weight:900;">',
        )
        .replace(/<\/strong><\/p>/g, '</span>')
        .replace(/<p>/g, '<br><p>')
        .replace('<br><p>', '<p>');
      const fontF =
        lang == 'ar'
          ? globals.FONTS.notokufiArabic
          : globals.FONTS.cairoRegular;
      faqContent =
        "<span style=\"color:'#323232';text-align:left;padding:10;fontSize: 13;lineHeight: 22;font-family:" +
        fontF +
        '">' +
        html +
        '</span>';
    } catch (err) {
      faqContent = '<html></html>';
    }

    const {expanded} = this.state;
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          ref={this.accordian}
          onPress={() => this.toggleExpand()}>
          <View style={styles.renderHeadings}>
            <Text style={styles.rendercontentText}> {this.props.title} </Text>
            {expanded ? (
              <Image style={styles.fq} source={images.up} />
            ) : (
              <Image style={styles.fq} source={images.down} />
            )}
          </View>
        </TouchableOpacity>
        {this.state.expanded && (
          <HTML
            containerStyle={styles.renderContents}
            baseFontStyle={globals.FONTS.notokufiArabic}
            source={{html: faqContent}}
          />
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}
