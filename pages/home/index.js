import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createTicket } from "../../redux/ticket/ticket.actions";
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';
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

const Home = (props) => {
    const [title, setTitle] = useState("");
    const [issue, setIssue] = useState("");
    const [status, setStatus] = useState("open");
    const [isLoading, setLoading] = useState(props.isLoading);

    const handleCreate = () => {
        let today = new Date();
        let assignTo = null;
        try {
            if(!title || !issue) {
                alert("Enter something.");
                return;
            }
            props.create(today, title, issue, status, assignTo);
            setTitle("");
            setIssue("");
        } catch(e) {
            alert("Something wrong happened. Please try again");
        }
    }

    useEffect(()=>{
        setLoading(props.isLoading);
    }, [props.isLoading]);

    return(
        <View style={styles.container}>
            <Text>This section is where the user create a ticket:</Text>
            <TextInput 
            placeholder="summary of the problem" 
            value={title} 
            onChangeText={(text)=>setTitle(text)}
            style={styles.input}
            />
            <TextInput 
            placeholder="state the problem" 
            value={issue} 
            onChangeText={(text)=>setIssue(text)} 
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
            {isLoading ?
            <ActivityIndicator size="small"/>
            : 
            <Button 
            style={styles.createBtn} 
            onPress={()=>handleCreate()}
            title="CREATE TICKET"
            />
            }
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

const mapStateToProps = (state) => {
    return {
        data: state.tickets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (datetime, title, issue, status, assignTo) => dispatch(createTicket(datetime, title, issue, status, assignTo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);