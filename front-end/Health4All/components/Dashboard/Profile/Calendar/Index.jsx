import React, { useState, useEffect } from "react";
import Header from "../../Notification/Header";
import { SpeedDial, Overlay } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity
} from "react-native";
import FormCalendar from './FormCalendar';
import { Formik } from "formik";
import { Modal, Button, Input, FormControl, HStack, Center, NativeBaseProvider, TextArea } from "native-base";
import { Calendar } from "react-native-big-calendar";
import DateTimePicker from '@react-native-community/datetimepicker';
import Time from "../../../../assets/icons/TimeCircle.svg";
import Dates from "../../../../assets/icons/date.svg";
import axios from "axios";

export default function Index({ navigation }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState("YYYY-MM-DD");
  const [time, setTime] = useState("HH:MM");
  const [endTime, setEndTime] = useState("HH:MM");
  const [data , setData] = useState([]);
  const [actionType , setActionType] = useState('add');
  const [id, setId] = useState();
  const [event, setEvent] = useState({title:'', subject:'', description:''})
  
  // consom api to get event
  const getEvent = async () => {
    await axios.get("http://192.168.0.188:8000/api/meals/get")
            .then(res=>{
              setData(res.data);
            }) 
            .catch(err=>{
              console.log(err);
            }); 
  }

  //use effect to get event
  useEffect(() => {
    getEvent();
  }, []);

  // consom api to add event
  const addEvent = async (values, text, time, endTime) => {
    const data = {
      title: values.title,
      subject: values.subject,
      description: values.description,
      dateStart: text,
      timeStart: time,
      timeEnd: endTime,
    }
    if (actionType == "edit") {
      await axios.put("http://192.168.0.188:8000/api/meals/" + id, data);
    }else{
      await axios.post("http://192.168.0.188:8000/api/meals/add", data);
    }
    getEvent();
    setModalVisible(false);
  };

  const events = data;
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let template = new Date(currentDate);
    let fDate = template.getFullYear() + "-" + (template.getMonth() + 1) + "-" + template.getDate();
    let fTime = template.getHours() + ':' + template.getMinutes() + ':' + template.getSeconds() + ':' + template.getMilliseconds();
    if (time !== "HH:MM") {
      setEndTime(fTime);
    }else if (text !== "YYYY-MM-DD") {
      setTime(fTime);
    }
    setText(fDate);
  }
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const deleteEvent = async () => {
    await axios.delete("http://192.168.0.188:8000/api/meals/" + id)
        .then(res=>{
          getEvent();
          setModalVisible(false);
          setActionType('add');
        }).catch(err=>console.log(err))
  };

  const edit = (event) => {
    setId(event.id)
    setEvent(event)
    setModalVisible(true);
    setActionType('edit');
  }


  return (
    <NativeBaseProvider style={styles.container}>
      <Calendar
        events={events}
        height={600}
        showAdjacentMonths={false}
        activeDate= { Date.now() }
        showTime= {true}
        onPressEvent={(event) => edit(event)}
      />
      <HStack 
        space="4" 
        justifyContent="flex-end" 
        alignItems="center" 
        style={{ 
          margin:20,
          position: 'absolute',
          top: 630,
          left: 310,
        }}>
          <Button style={{ width:60, height:60, borderRadius: 50  }} onPress={() => {
            setModalVisible(!modalVisible);
            setActionType('add');
          }}>
            <Text style={{ fontSize:25, color: "white" }}>+</Text>
        </Button>
      </HStack>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Add new event</Modal.Header>
          <Formik  
                initialValues={{
                    title: event.title,
                    subject: event.subject,
                    description: event.description,
                }}

                onSubmit={(values) => {
                  addEvent(values, text, time, endTime);
                }}
          >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <Modal.Body>
                  <FormControl>
                    <Input 
                      placeholder="title"
                      onChangeText={handleChange("title")}
                      onBlur={handleBlur("title")} 
                      value={values.title}
                      _focus={{ borderColor: '#9DCEFF' }}
                    />
                  </FormControl>
                  <FormControl mt={2}>
                    <Input 
                      placeholder="subject"
                      onChangeText={handleChange("subject")}
                      onBlur={handleBlur("subject")} 
                      value={values.subject}
                      _focus={{ borderColor: '#9DCEFF' }}
                    />
                  </FormControl>
                  <FormControl mt={2} style={{ flexDirection:'row',justifyContent: "space-between", alignItems:"center" }} >
                      <Input
                        placeholder="startDate"
                        onChangeText={handleChange("startDate")}
                        onBlur={handleBlur("startDate")} 
                        value={text}
                        w="90%"
                        _focus={{ borderColor: '#9DCEFF' }}
                      />
                      <TouchableOpacity onPress={() => showMode("date")} >
                        <Dates />
                      </TouchableOpacity>
                  </FormControl>
                  <FormControl mt={2} style={{ flexDirection:'row',justifyContent: "space-between", alignItems:"center" }}>
                    <Input 
                      placeholder="StartTime"
                      onChangeText={handleChange("StartTime")}
                      onBlur={handleBlur("StartTime")} 
                      value={time}
                      w="90%"
                      _focus={{ borderColor: '#9DCEFF' }}
                    />
                     <TouchableOpacity  onPress={() => showMode("time")} >
                        <Time />
                    </TouchableOpacity>
                  </FormControl >
                  <FormControl mt={2} style={{ flexDirection:'row',justifyContent: "space-between", alignItems:"center" }}>
                    <Input 
                      placeholder="EndTime"
                      onChangeText={handleChange("EndTime")}
                      onBlur={handleBlur("EndTime")} 
                      value={endTime}
                      w="90%"
                      _focus={{ borderColor: '#9DCEFF' }}
                    />
                     <TouchableOpacity  onPress={() => showMode("time")} >
                      <Time />
                    </TouchableOpacity>
                  </FormControl>
                  <FormControl mt={2}>
                    <TextArea
                      placeholder="description"
                      onChangeText={handleChange("description")}
                      onBlur={handleBlur("description")} 
                      value={values.description}
                      style={{ borderColor: '#9DCEFF' }}
                    />
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  {actionType == 'edit' ? 
                    <Button.Group space={2}>
                      <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                      setModalVisible(false);
                    }}>
                        Cancel
                      </Button>
                      <Button
                        colorScheme="secondary"
                        onPress={() => {
                          deleteEvent();
                        }}
                      >
                        Delete
                      </Button>
                      <Button  onPress={() => {
                        handleSubmit();
                      }}>
                        Update
                      </Button>

                    </Button.Group>
                   : 
                  <Button.Group space={2}>
                    <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                    setModalVisible(false);
                  }}>
                      Cancel
                    </Button>
                    <Button onPress={() => {
                    handleSubmit();
                    }}>
                      Add
                    </Button>
                  </Button.Group>}
                </Modal.Footer>    
                </>
              )}
            </Formik>
        </Modal.Content>
      </Modal>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        )}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
