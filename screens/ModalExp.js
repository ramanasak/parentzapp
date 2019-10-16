import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Slider,
  ScrollView,
  Dimensions,
  TextInput,
  Image
} from "react-native";
import Modal from "react-native-modalbox";
import Button from "react-native-button";
import Icon from "react-native-vector-icons/Feather";
/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state
 *  - pure functions
 *  - only mandatory argument is the 'type'
 * Subscriber - listens for state change to update the ui
 */

// const initialState = {
//   counter: 0
// }
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREASE_COUNTER':
//       return { counter: state.counter + 1 }
//     case 'DECREASE_COUNTER':
//       return { counter: state.counter - 1 }
//   }
//   return state
// }

// const store = createStore(reducer)
var screen = Dimensions.get("window");
class ModalExp extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  onClose() {
    console.log("Modal just closed");
  }

  onOpen() {
    console.log("Modal just opened");
  }

  onClosingState(state) {
    console.log("the open/close of the swipeToClose just changed");
  }

  renderList() {
    var list = [];

    for (var i = 0; i < 50; i++) {
      list.push(
        <Text style={styles.text} key={i}>
          Elem {i}
        </Text>
      );
    }

    return list;
  }

  render() {
    var BContent = (
      <Button
        onPress={() => this.setState({ isOpen: false })}
        style={[styles.btn, styles.btnModal]}
      >
        X
      </Button>
    );

    return (
      // <Provider store={store}>
      //   <CounterApp />
      // </Provider>
      // <Form />
      // <Notice />
      <View style={styles.wrapper}>
        <Text>welcome </Text>

        <Button onPress={() => this.refs.modal1.open()} style={styles.btn}>
          Basic modal
        </Button>
        <Button onPress={() => this.refs.modal2.open()} style={styles.btn}>
          Position top
        </Button>
        <Button onPress={() => this.refs.modal3.open()} style={styles.btn}>
          Position centered + backdrop + disable
        </Button>
        <Button onPress={() => this.refs.modal4.open()} style={styles.btn}>
          Position bottom + backdrop + slider
        </Button>
        <Button
          onPress={() => this.setState({ isOpen: true })}
          style={styles.btn}
        >
          Backdrop + backdropContent
        </Button>
        <Button onPress={() => this.refs.modal6.open()} style={styles.btn}>
          Position bottom + ScrollView
        </Button>
        <Button onPress={() => this.refs.modal7.open()} style={styles.btn}>
          Modal with keyboard support
        </Button>

        <Modal
          style={[styles.modal, styles.modal1]}
          ref={"modal1"}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}
        >
          <Text style={styles.text}>Basic modal</Text>
          <Button
            onPress={() =>
              this.setState({ swipeToClose: !this.state.swipeToClose })
            }
            style={styles.btn}
          >
            Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})
          </Button>
        </Modal>

        <Modal
          style={[styles.modal, styles.modal2]}
          backdrop={false}
          position={"top"}
          ref={"modal2"}
        >
          <Text style={[styles.text, { color: "white" }]}>Modal on top</Text>
        </Modal>

        <Modal
          style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal3"}
          isDisabled={this.state.isDisabled}
        >
          <Text style={styles.text}>Modal centered</Text>
          <Button
            onPress={() =>
              this.setState({ isDisabled: !this.state.isDisabled })
            }
            style={styles.btn}
          >
            Disable ({this.state.isDisabled ? "true" : "false"})
          </Button>
        </Modal>

        <Modal
          style={[styles.modal, styles.modal4]}
          position={"bottom"}
          ref={"modal4"}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}> ramana </Text>
          {/* <Text style={styles.text}>Modal on bottom with backdrop</Text>
                    <Slider style={{ width: 200 }} value={this.state.sliderValue} onValueChange={(value) => this.setState({ sliderValue: value })} /> */}
          {/* <View>
                <TouchableOpacity style={{marginTop:50}}> */}

          <View
            style={{
              flex: 2,
              backgroundColor: "red",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                backgroundColor: "white"
              }}
            >
              <Image
                source={require("./../studentpic.jpg")}
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 5,
                  borderRadius: 37.5,
                  marginLeft: 15
                }}
              />
            </View>
            <View
              style={{
                flex: 3,
                marginLeft: 5,
                alignItems: "flex-start",
                backgroundColor: "white",
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  flex: 2,
                  alignItems: "flex-start",
                  backgroundColor: "white"
                }}
              >
                {/* <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.studentName}</Text> */}
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {" "}
                  ramana sakhavarapu
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "white"
                }}
              >
                <Icon name="chevron-right" size={30} color={"grey"} />
              </View>
            </View>
          </View>

          {/* </TouchableOpacity>
                
    </View>      */}
        </Modal>

        <Modal
          isOpen={this.state.isOpen}
          onClosed={() => this.setState({ isOpen: false })}
          style={[styles.modal, styles.modal4]}
          position={"center"}
          backdropContent={BContent}
        >
          <Text style={styles.text}>Modal with backdrop content</Text>
        </Modal>

        <Modal
          style={[styles.modal, styles.modal4]}
          position={"bottom"}
          ref={"modal6"}
          swipeArea={20}
        >
          <ScrollView>
            <View style={{ width: screen.width, paddingLeft: 10 }}>
              {this.renderList()}
            </View>
          </ScrollView>
        </Modal>

        <Modal
          ref={"modal7"}
          style={[styles.modal, styles.modal4]}
          position={"center"}
        >
          <View>
            <TextInput
              style={{ height: 50, width: 200, backgroundColor: "#DDDDDD" }}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default ModalExp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: "center",
    alignItems: "center"
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 200
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  text: {
    color: "black",
    fontSize: 22
  }
});
