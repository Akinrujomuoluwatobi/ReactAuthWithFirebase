import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';


class LoginForm extends Component {

  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth.signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth.createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' });
          });
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          <Text Login />
        </Button>
      );
  }
  render() {
    const { containerStyle, errorTextStyle } = styles;
    return (
      <Card style={containerStyle}>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />

        </CardSection>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()};
        </CardSection>
      </Card>

    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
