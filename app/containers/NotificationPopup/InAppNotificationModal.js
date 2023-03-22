import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, I18nManager } from 'react-native';
import Modal from 'react-native-modal';
import appTexts from '../../lib/appTexts';
import RoundButton from '../../components/RoundButton';

import StyleSheetFactory from './styles';

class InAppNotificationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: true,
    };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const styles = StyleSheetFactory.getSheet(I18nManager.isRTL);
    const modalhead = this.props.title;
    const modalbody = this.props.body;
    let btntext = appTexts.NOTIFY.done_button;
    const btnSupportRequestText = 'Done';
    btntext = this.props.type == 'support' ? btnSupportRequestText : btntext;

    return (
      <View>
        <Modal isVisible={this.props.visible} style={styles.modalMainContent}>
          <View style={styles.modalmainView}>
            <View style={styles.ModalContent}>
              <TouchableOpacity
                style={{ marginBottom: 1 }}
                onPress={() => this.props.hide()}>
                <Text style={styles.closeText}>X</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.logo}>
              {/* <Image
                source={require('../../images/main/modallogo.png')}
                style={{ width: 75, height: 75 }}
              /> */}
            </View>

            <View style={styles.body}>
              <Text style={[styles.bodytext, { paddingTop: 5 }]}>
                {modalhead}
              </Text>
              <Text style={[styles.contenttext, { paddingTop: 8 }]}>
                {modalbody}
              </Text>
            </View>

            <View style={{ paddingBottom: '8%' }}>
              {/* <Commonbutton
                buttontext={btntext}
                onPress={() => {
                  this.props.redirect();
                }}
              /> */}

              <RoundButton
                buttonPosition={'center'}
                buttonText={btntext}
                buttonClick={() => {
                  this.props.redirect();
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default InAppNotificationModal;
