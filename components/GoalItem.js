import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (<View style={styles.goalItem}>
        <Pressable android_ripple={{ color: '#210644' }
        } onPress={props.onDeleteItem.bind(this, props.id)}
            style={({ Pressed }) => Pressed && styles.pressedItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable ></View >

    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'rgb(14, 189, 242)',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
});

