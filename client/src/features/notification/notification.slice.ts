import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface Message {
  id: string;
  message: string;
  type: string;
}

interface NotificationState {
  messages: Message[];
}

const initialState: NotificationState = {
  messages: [
  
  ],
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<{ message: string; type: string }>) => {
      const { message, type } = action.payload;
      const newMessage: Message = {
        id: nanoid(),
        message,
        type,
      };

      const updatedMessage = [...state.messages, newMessage];
      return {
        ...state,
        messages: updatedMessage,
      }
    },

    removeMessage: (state) => {
      const updatedMessage = state.messages.slice(0, -1);

      return {
        ...state,
        messages: updatedMessage,
      }
    }
  },
});

export const { addMessage, removeMessage } = notificationSlice.actions;
export default notificationSlice.reducer;