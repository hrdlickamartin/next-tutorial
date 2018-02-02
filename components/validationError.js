// @flow
import * as React from 'react';
import * as validation from '../backend/validation';
import Text from './Text';

type ValidationErrorProps = {
  error: ?validation.ValidationError,
};

const getMessage = error => {
  switch (error.type) {
    case 'alreadyExists':
      return 'already Exists';
    case 'not Exists':
      return 'notExists';
    case 'wrongPassword':
      return 'wrong Password';
    case 'notAuthorized':
      return 'not Authorized';
    case 'unknownError':
      return 'unknown Error' + error.message;
    case 'requestFailed':
      return 'request Failed';

    case 'trim':
      return 'trim';
    case 'required':
      return 'required';
    case 'email':
      return 'email';
    case 'minLength':
      return 'unknown Error' + error.minLength;
    case 'maxLength':
      return 'unknown Error' + error.maxLength;
    default:
      (error: empty);
      return '';
  }
};

export class ValidationError extends React.PureComponent<ValidationErrorProps> {
  render() {
    if (!this.props.error) return null;
    return JSON.stringify(this.props.error);
  }
}
