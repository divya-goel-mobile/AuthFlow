import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import { connect } from 'react-redux';
import { SIGN_IN } from '../redux/actionTypes';
import { authAction } from '../redux/action';

class SignInContainer extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={() => {
                    this.props._authAction(SIGN_IN, "bearer: token");
                }}>
                <Text style={{fontSize: 20}}>Sign In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const mapDispatchToProps = {
  _authAction: authAction,
};

export default connect(null, mapDispatchToProps)(SignInContainer);
