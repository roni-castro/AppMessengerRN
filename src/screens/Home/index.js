import React from 'react';
import {View, Text, FlatList} from 'react-native';
import moment from 'moment';

const messages = [
  {
    id: 1,
    timestamp: 1600725149,
    subject: 'The Brain That Changes Itself',
    read: false,
    detail:
      'A breakthrough book that debunks the idea that a damaged brain can not be healed. The erroneous ideas about the brain’s inability to heal were believed to be true by brain experts and doctors for decades. Ultimately it shows that the brain can change and we are in control of that change – we can rewire our own brains for the better. Wow.',
  },
  {
    id: 2,
    timestamp: 1600505149,
    subject: 'Men are from Mars Women are from Venu',
    read: true,
    detail:
      'Author John Gray had been giving relationship advice for many years. Then he tried a new title (for his existing work). His clever use of metaphor (men and women are from different ‘planets’) to frame the discussion and highlight male/female differences drove the book to sell over 50 million copies. His relationship ideas were also more effective because the metaphor helped both men and women understand the other’s view – which dissolved a lot of problems. That’s right. 50 million copies.',
  },
  {
    id: 3,
    timestamp: 1600605149,
    subject: 'Andrea Agassi’s OPEN',
    read: false,
    detail:
      'This simple title served (sorry!) to say a lot about what the reader would find in the book. Not only is ‘Open’ the name of the professional level of tennis dominated by Agassi, this book was also an open and honest celebrity autobiography. In fact, it was lauded as a rare look at the reality of professional sporting life – with open discussion of drug use and depression. The simple title worked as a window to the content of the book.',
  },
  {
    id: 4,
    timestamp: 1600605149,
    subject: 'The Electronic Swagman',
    read: false,
    detail:
      'What would you get if you merged an authentic Aussie swagman with an internet-connected blogger? You’d get an Electronic Swagman. Raymond Hawkins (and his dog Tommie) travel Australia taking photos, writing stories and meeting fascinating people. He travels in his customised 4-wheel mini-bus with a laptop and mobile internet connection – sleeping under the stars in his swag whenever possible. He posts 2-3 magnificent photos each day from his travels.',
  },
  {
    id: 5,
    timestamp: 1600605149,
    subject: 'The Power of Habit',
    read: true,
    detail:
      'Simple title, but spot on. This vivid title hints at the powerful and automatic influence habits have over our lives. Many successful people have written about habits and their amazing impact on our lives (eg: Warren Buffet famously states; ‘The chains of habit are too light to be felt until they are too heavy to be broken’. Get started now :). This book is a clear and helpful refresher on the all-encompassing power of habit.',
  },
  {
    id: 6,
    timestamp: 1600605149,
    subject: 'Virus of the mind',
    read: true,
    detail:
      'Just for a moment, try to forget that you know the term ‘going viral’ in relation to social media. This 1996 book talks about the brand new concept of ideas spreading like a virus. It’s obviously a vivid message because the term ‘viral‘ is ubiquitous today. This vivid title not only grabs our attention with the idea of a virus of the mind, but it hints at the outcome you wanted for your ideas – to spread like a virus. All in 4 words. Love it.',
  },
  {
    id: 7,
    timestamp: 1600605149,
    subject: 'Brutal Simplicity of thought',
    read: true,
    detail:
      'What makes great advertising? Brutal simplicity of thought. A vivid title from advertising agency “Saatchi & Saatchi” that not only pulls you in to the book to read the great examples, it explains the principles behind great messages. Simplicity looks easy, but it’s not. It’s easier to complicate than simplify. So, what is required? (read the title…)',
  },
  {
    id: 8,
    timestamp: 1600605149,
    subject: 'A smile in the mind',
    read: true,
    detail:
      'A vivid title for a book about graphic design. What’s great about this? The title explains the result of great design. In 5 words. Using a rich metaphor. The result of great design is that we recognise of the purpose or ‘message’ of the visual piece quickly and clearly. And it registers in the mind strongly as with a positive association. Not another discussion on colours and fonts, etc. Instead whatever way you can achieve it, great design results in a smile in the mind. I’m smiling at the thought of it!',
  },
  {
    id: 9,
    timestamp: 1600605149,
    subject: 'The Power of Now',
    read: true,
    detail:
      'The title is the message here. The powerful take out of this book is that we waste huge amounts of energy in guilt, regret and pain etc. focusing on the past; as well as worry and uncertainty about the future. Whereas if you build the habit of focusing on the NOW, you will find effortless joy and natural energy. Cool. (Btw, the working title was ‘Freedom from time’. Not quite as good!)',
  },
  {
    id: 10,
    timestamp: 1600605149,
    subject: 'Lean In',
    read: true,
    detail:
      'This book was published less than a year ago and already the term ‘Lean in’ has become a widely used for female empowerment and success. The title words convey a visual image that underpins the broader message outlined in the pages inside. The author, Sheryl Sandberg (Chief Operating Officer at Facebook), argues that women continue to face career obstacles – but can overcome them by speaking up, setting big goals, working hard, and finding supporters. Lean in and you’ll automatically be on the front foot 🙂',
  },
];

const Home = () => {
  return (
    <View>
      <Text>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.subject}</Text>
            <Text>{moment(new Date(item.timestamp) * 1000).fromNow()}</Text>
            <Text>{item.detail}</Text>
            <View
              style={{
                borderBottomWidth: 1,
                backgroundColor: '#ccc',
                marginVertical: 10,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Home;
