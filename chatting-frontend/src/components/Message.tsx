import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import ReactPlayer from 'react-player';
import DocViewer from 'react-doc-viewer';

interface IMessageProps {
  userId: number;
  text: string;
  mediaType: string;
  isMedia: boolean;
}

export const Message: React.FC<IMessageProps> = ({
  userId,
  text,
  isMedia,
  mediaType,
}) => {
  const { botId } = useSelector((state: RootState) => {
    return { botId: state.chatroom.botId };
  }, shallowEqual);

  let renderedMessage;
  if (!isMedia) {
    renderedMessage = (
      <div
        className={`${
          botId === userId ? 'bg-secondary' : 'bg-primary'
        } p-2 m-2 rounded d-flex flex-wrap`}
      >
        <div className="text-white">{text}</div>
      </div>
    );
  } else {
    if (mediaType === 'photo') {
      renderedMessage = (
        <div
          className={`${
            botId === userId ? '' : ''
          } p-2 m-2 rounded d-flex flex-wrap`}
        >
          <img src={text} alt="text" height={'200px'} width={'200px'} />
        </div>
      );
    } else if (mediaType === 'video') {
      renderedMessage = (
        <div>
          <ReactPlayer
            url={text}
            playing={true}
            controls={true}
            style={{ height: '200px', width: '200px' }}
          />
        </div>
      );
    } else if (mediaType === 'document') {
      const docs = [{ uri: text }];
      //renderedMessage = <DocViewer documents={docs} />;
      renderedMessage = (
        <div
          className={`${
            botId === userId ? 'bg-secondary' : 'bg-primary'
          } p-2 m-2 rounded d-flex flex-wrap`}
        >
          <a href={text} style={{ textDecoration: 'none', color: 'white' }}>
            View Document &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-text"
              viewBox="0 0 16 16"
            >
              <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
            </svg>
          </a>
        </div>
      );
    }
  }
  return <>{renderedMessage}</>;
};
//<div className="col-2 text-secondary text-right">{userId}</div/>
//<DocViewer documents={[{ uri: text }]} />
