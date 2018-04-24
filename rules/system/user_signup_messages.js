let msg = {};

msg.NO_PAYLOAD = 'NO PAYLOAD';
msg.NO_NAME = 'You miss the name field';
msg.NO_LOGIN = 'You miss the login field';
msg.NO_PASSWORD = 'You miss the password field';
msg.NO_PASSWORD_CONFIRMATION = 'You miss the password confirmation field';

msg.WRONG_NAME = 'Your name must have at minimun two words and three letters.';
msg.WRONG_LOGIN = 'Your login must have minimun of six letters, numbers or underscore. Space not allowed.';
msg.WRONG_PASSWORD = 'Your password must have 8 characters at minimun.';
msg.WRONG_PASSWORD_CONFIRMATION = 'Your password confirmation must be equal your password.';

msg.LOGIN_TAKEN = 'This login has been already used. Please pick another one.';

module.exports = msg;
