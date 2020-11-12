import React, { Component } from 'react';
import { TouchableHighlight , StyleSheet, Text, TextInput, View ,Modal, Button} from 'react-native';
import { WebView } from 'react-native-webview';
import SystemSetting from 'react-native-system-setting';
export default class App extends Component {
  constructor() {
    super()

    this.state = {
      url: '',
      isLogined: false,
      show:false,
      isWifiNetworkEnabled: null,
      showTool:false,
      airplaneEnable: false,
      airplaneStateLoading: false,
      ip: null
  }
}


  _switchAirplane() {

    <TouchableHighlight onPress={SystemSetting.isAirplaneEnabled((enable)=>{
      const state = enable ? 'On' : 'Off';
      console.log('Current airplane is ' + state);
    })}>
      {SystemSetting.switchAirplane(()=>{
      console.log('switch airplane successfully');})}
    </TouchableHighlight>
  }

  inputChangeHandler = (value, name) => {
    this.setState({
      [name]: value
    })
  }
  Connect = () => {
    if ((this.state.url)) {
      this.setState({show: true});
    }
    else {
      this.setState({show: false});
    }
  }
  ReConnect = () => {
      this.setState({show: false});
      this.setState({showTool: true});
     
    }
  ExitTool = () => {
      this.setState({showTool: false});
    }


  render() {
    return (
    
       <View style={LOCAL_STYLES.wrapper} testID="app-root" accessibilityLabel="app-root">
         <View style={LOCAL_STYLES.inputContainer}>
          <TextInput name="url" accessibilityLabel="url" style={LOCAL_STYLES.input} onChangeText={(text) => this.inputChangeHandler(text, "url")} />
        </View>      
        <TouchableHighlight style={LOCAL_STYLES.buttonContainer} accessibilityLabel="connect" onPress={()=>this.Connect()}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableHighlight> 
        <Modal 
      transparent={true}
      visible={this.state.show}   
      >
        <View style={{backgroundColor:"#000000aa",flex:1}} accessibilityLabel="app-root">
           <View style={{backgroundColor:"#ffffff",margin:10,padding:10,borderRadius:10,flex:1}}>
           <WebView
            source={{ uri: this.state.url }}
            style={{ marginTop:
               20 }}
            />
             <TouchableHighlight accessibilityLabel="kill"  onPress={()=>this.ReConnect()} >
             <Text style={{ color: 'red' }}>AirMode</Text>
             </TouchableHighlight>
              </View>
        </View>
      </Modal>

      <Modal 
      transparent={true}
      visible={this.state.showTool}   
      >
        <View style={{backgroundColor:"#000000aa",flex:1}} accessibilityLabel="app-root">
           <View style={{backgroundColor:"#ffffff",margin:10,padding:10,borderRadius:10,flex:1}}>
              <Text >Enable/Disable wifi network</Text>
              <View >
                <TouchableHighlight accessibilityLabel="Wificonnect"onPress={this._switchAirplane.bind(this)}>
                  <Text >Enable</Text>
                </TouchableHighlight>
              </View>   
 
             <TouchableHighlight accessibilityLabel="reconnect"  onPress={()=>this.ExitTool()} >
             <Text style={{ color: 'red' }}>Exit</Text>
             </TouchableHighlight>
              </View>
        </View>
      </Modal>
       </View> 
    );
  }
}

const LOCAL_STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'column'
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    height: 45,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#00b5ec"
  }
});