import moment from 'moment';

export const toUpperCase = string => {
  if (!string) {
    return null;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const dateFormat = date => {
  return moment(date).format('DD MMM YYYY');
};
