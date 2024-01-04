import { useEffect, useState } from 'react'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../features/notification/notification.slice';

interface Notification {
  id: string;
  message: string;
  type: string;
}

interface RootState {
  messageReducer: {
    messages: Notification[]
  }
}


const ToastNotification = () => {

  const messages = useSelector((state:RootState) => state.messageReducer.messages)
  const dispatch = useDispatch()


  return (
    <div className='fixed z-[1000] bottom-[10px] right-[10px] flex flex-col gap-[15px]'>
      {
       messages.map(message => {
        return <Message message={message.message} type={message.type} key={message.id} /> 
       } ) 
      }
    </div>
  )
}

export default ToastNotification
