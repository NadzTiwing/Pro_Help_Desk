import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { color } from "../../const";

/*
- ticket number
- datetime created
- ticket title
- description of the ticket
- status: high priority, low priority
- IT user with a role { main role, observer }
*/

const Home = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState("open");

    const handleCreate = () => {
        
    }

    return(
        <View style={styles.container}>
            <Text>This section is where the user create a ticket:</Text>
            <TextInput 
            placeholder="summary of the problem" 
            value={title} 
            onChange={(value)=>setTitle(value)}
            style={styles.input}
            />
            <TextInput 
            placeholder="state the problem" 
            value={desc} onChange={(value)=>setDesc(value)} 
            style={styles.textArea}
            multiline={true}
            numberOfLines={10}
            />
            <View style={styles.selection}>
                <Picker
                style={styles.selectInput} 
                selectedValue={status}
                onValueChange={(value) => setStatus(value)}
                >
                    <Picker.Item
                        label="Low priority"
                        value="open"
                    />
                    <Picker.Item
                        label="High priority"
                        value="priority"
                    />
                </Picker>
            </View>
            <Button 
            style={styles.createBtn} 
            onPress={()=>handleCreate()}
            title="CREATE TICKET"
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 5
  },
  textArea: {
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    height: 120
  },
  selection: {
    width: "80%",
    margin: 5,
    flexDirection: "row",
    borderWidth: 1,
    padding: 10
  },
  selectInput: {
    alignSelf:"flex-end",
    width: 150,
  },
  createBtn: {
    backgroundColor: color.navy,
    width: "80%",
  }
});

export default Home;