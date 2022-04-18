import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MESSAGE_TO_CHATROOM } from '../graphql/mutations';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';

interface IChatInputProps {}

export const ChatInput: React.FC<IChatInputProps> = (props) => {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();

  const { chatroomId, botId } = useSelector((state: RootState) => {
    return {
      chatroomId: state.chatroom.chatroomId,
      botId: state.chatroom.botId,
    };
  }, shallowEqual);
  const [createMessage, { data }] = useMutation(ADD_MESSAGE_TO_CHATROOM);
  const handleSend = () => {
    createMessage({
      variables: {
        text: input,
        isMedia: false,
        mediaType: '',
        userId: botId,
        chatroomId: parseInt(chatroomId.toString(), 10),
      },
    })
      .then((data) => {
        console.log(data);
        setInput('');
      })
      .catch((err) => console.log(err));
  };
  const openCloudWidget = () => {
    // @ts-ignore
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: 'sarthakarora',
          uploadPreset: 'c3icayy2',
          //resourceType: 'image',
        },
        (error: any, result: any) => {
          if (!error && result && result.event === 'success') {
            let extension = result.info.path.split('.')[1];
            let url = result.info.secure_url;
            let mediaType;
            if (extension === 'mp4') {
              mediaType = 'video';
            } else if (extension === 'docx' || extension === 'pdf') {
              mediaType = 'document';
            } else if (extension === 'jpg' || extension === 'png') {
              mediaType = 'photo';
            }
            console.log(mediaType);
            console.log(url);

            createMessage({
              variables: {
                text: url,
                isMedia: true,
                mediaType: mediaType || '',
                userId: botId,
                chatroomId: parseInt(chatroomId.toString(), 10),
              },
            });
          }
        }
      )
      .open();
  };

  return (
    <>
      <div className="bg-white border-top d-flex p-3">
        <input
          className="form-control"
          type="text"
          placeholder="Write your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary ml-2" onClick={openCloudWidget}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-paperclip"
            viewBox="0 0 16 16"
          >
            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
          </svg>
        </button>

        <button className="btn btn-primary ml-2" onClick={handleSend}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </button>
      </div>
    </>
  );
};
{
  /* <input
        className="form-control"
        placeholder="Enter your message here."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary ml-2" onClick={handleSend}>
        Post
      </button> */
}
