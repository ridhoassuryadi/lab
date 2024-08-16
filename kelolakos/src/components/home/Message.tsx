import React from 'react';
import moment from 'moment';
import { Avatar, AvatarImage } from '../ui/Avatar';

export default function Message(props) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      avatarUrl,
      timeInformation
    } = props;

    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { data.message }
          </div>
          {endsSequence ?
          <div className={`mt-2 flex items-center ${isMine ? "flex-row-reverse" : ""}`}>
            <Avatar className="w-6 h-6">
              <AvatarImage src={avatarUrl} alt="Pedro Duarte" />
            </Avatar>
            <div className='w-2 h-2'/>
            <p className='text-slate-400 text-xs'>{timeInformation}</p>
          </div> : null}          
        </div>

      </div>
    );
}