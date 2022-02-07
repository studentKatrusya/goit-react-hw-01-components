import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ avatar, status, name }) {
  return (
    <li className={s.item}>
      <div
        style={{
          borderRadius: '50%',
          width: '16px',
          height: '16px',
          background: status ? 'green' : 'red',
        }}
        className={s.status}
      >
        {status}
      </div>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
