import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Header} from '../../components/Header';
import MessageCard from '../../components/MessageCard';
import {Container} from './styles';

const Home = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function fetchMessages() {
      fetch('https://appmessenger-api.herokuapp.com/message')
        .then((response) => response.json())
        .then((data) => setMessages(data))
        .catch((e) => console.log(e));
    }
    fetchMessages();
  }, []);

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
