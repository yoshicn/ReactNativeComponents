/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  SwitchIOS,
  SliderIOS,
  AlertIOS,
  ListView,
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBarIOS,
  TouchableHighlight,
} = React;

var ReactNativeComponents = React.createClass({
  getInitialState() { 
    StatusBarIOS.setStyle('default');
    StatusBarIOS.setHidden(false, 'slide');

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return { 
      trueSwitchIsOn: true, 
      falseSwitchIsOn: false, 
      sliderValue: 10, 
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6']),
    };

  },
  render: function() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Basic list of components (to be updated).
        </Text>

        <View style={styles.buttonWrapper} horizontal='true'>
          <Text>SwitchIOS</Text>
          <SwitchIOS onValueChange={(value) => this.setState({trueSwitchIsOn: value})} style={{marginBottom: 10}} value={this.state.trueSwitchIsOn} />
          <SwitchIOS onValueChange={(value) => this.setState({trueSwitchIsOn: value})} style={{marginBottom: 10}} value={this.state.trueSwitchIsOn} />
          <SwitchIOS onValueChange={(value) => this.setState({falseSwitchIsOn: value, trueSwitchIsOn: !value})} value={this.state.falseSwitchIsOn} />
        </View>

        <View style={styles.buttonWrapper}>
          <Text>Playing with StatusBarIOS</Text>
          <TouchableHighlight style={styles.wrapper} onPress={() => StatusBarIOS.setHidden(true, 'slide')}>
            <View style={styles.button}>
              <Text>Hide</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.wrapper} onPress={() => StatusBarIOS.setHidden(false, 'fade')}>
            <View style={styles.button}>
              <Text>Show</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.wrapper} onPress={() => StatusBarIOS.setStyle('light-content')}>
            <View style={styles.button}>
              <Text>Set Light</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.wrapper} onPress={() => StatusBarIOS.setStyle('default')}>
            <View style={styles.button}>
              <Text>Set Default</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.wrapper} onPress={this._clickMe.bind(this)}>
            <View style={styles.button}>
              <Text>Say Hi!</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View>
          <Text>SliderIOS</Text>
          <Text style={styles.text} >
            {this.state.sliderValue}
          </Text>
          <SliderIOS maximumValue='100' minimumValue='0' value={this.state.sliderValue}  style={styles.slider} onValueChange={(value) => this.setState({sliderValue: value})} />
        </View>

        <Text>ListView</Text>
        <ListView
          dataSource={this.state.dataSource} 
          renderRow={this._renderRow} />
      </ScrollView>
    );
  },

  _renderRow: function(rowData: string) { 
    return ( 
    <TouchableHighlight> 
      <View>
        <View style={styles.row}>
          <Text>{rowData}</Text>
        <View style={styles.separator} />
        </View>
      </View>
    </TouchableHighlight> 
    ); 
  },

  _clickMe: function() {
    AlertIOS.alert("Button pressed");
  },
});

var styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    padding: 10, 
    backgroundColor: '#F6F6F6', 
  }, 
  separator: { 
    height: 1, 
    backgroundColor: '#000000', 
  },
  rowStyle: {
    height: 20,
    backgroundColor: '#F5FCFF',
  },
  buttonWrapper: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  container: {
    backgroundColor: '#F5FCFF',
    color: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
 wrapper: { flexDirection: 'column', flexWrap: 'wrap', borderRadius: 5, marginBottom: 5, }, button: { alignSelf: 'stretch', backgroundColor: '#92c80e', color: '#FFFFFF', padding: 10, width: 200, textAlign: 'center'},
 slider: { height: 20, margin: 10, alignSelf: 'stretch',}, text: { fontSize: 14, textAlign: 'center', fontWeight: '500', margin: 10, },
});

AppRegistry.registerComponent('ReactNativeComponents', () => ReactNativeComponents);
