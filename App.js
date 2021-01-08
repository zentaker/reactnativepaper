import * as React from 'react';
import {List} from 'react-native-paper';
import {SafeAreaView, View, Text} from 'react-native';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaView>
      <List.AccordionGroup>
        <List.Accordion
          title="Accordion 1\\"
          id="1"
          left={(props) => <List.Icon {...props} icon="folder" />}>
          <View>
            <Text>hola</Text>
          </View>
        </List.Accordion>
      </List.AccordionGroup>
    </SafeAreaView>
  );
};

export default MyComponent;
