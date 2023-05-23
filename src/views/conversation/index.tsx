import { ConversationList } from 'chatuim2';
import './index.css';
const Conversation = () => {
  const testClick = (res: any) => {
    console.log('>>>>', res);
  };
  return (
    <div className='conversation_container'>
      <ConversationList onItemClick={testClick} />
    </div>
  );
};
export default Conversation;
