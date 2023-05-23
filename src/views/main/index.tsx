import { useEffect } from 'react';
/* EaseIM */
import { useClient } from 'chatuim2';
/* components */
import Conversation from '../conversation';
import ChatContainer from '../chatContainer';
const Main = () => {
  const client = useClient();
  useEffect(() => {
    client &&
      client
        .open({
          user: 'hfp',
          pwd: '1',
        })
        .then((res: any) => {
          console.log('get token success', res);
          // create a conversation
          // rootStore.conversationStore.addConversation({
          //   chatType: '', // 'singleChat' || 'groupChat'
          //   conversationId: '', // target user id or group id
          //   name: '', // target user nickname or group name
          // });
        });
  }, [client]);
  return (
    <div className='main_container'>
      <Conversation />
      <ChatContainer />
    </div>
  );
};

export default Main;
