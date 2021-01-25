import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {Header} from '../../components/Header';
import MessageCard from '../../components/MessageCard';
import {Container} from './styles';

const Home = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    function fetchMessages() {
      setisLoading(true);
      fetch('https://appmessenger-api.herokuapp.com/message')
        .then((response) => response.json())
        .then((data) => setMessages(data))
        .catch((e) => console.log(e))
        .finally(() => setisLoading(false));
    }
    fetchMessages();
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000FF"
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    );
  }

  return (
    <Container>
      <Header title="Messages" />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <MessageCard
            item={item}
            onMessagePress={() => navigation.navigate('detail', {item})}
          />
        )}
      />
    </Container>
  );
};

export default Home;
