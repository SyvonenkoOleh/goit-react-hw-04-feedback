import PropTypes from 'prop-types';
import { NotificationText } from './Notifications.styled';

export const Notification = ({ text }) => {
  return <NotificationText>{text}</NotificationText>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};


