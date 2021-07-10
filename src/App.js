import { ChatEngine } from 'react-chat-engine';
import { ChatFeed } from './components/ChatFeed';
import { LoginForm } from './components/LoginForm';

import './App.css';
const projectID = 'c0da685f-d052-4af5-96fc-9e48e876d6f2';


function App() {

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (

    <ChatEngine 
      height = "100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

    />
   
  );
}

export default App;
