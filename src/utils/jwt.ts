import * as jwt from 'jsonwebtoken';

export const generate = (string: string) => {
  const option: jwt.SignOptions = {
    // expiresIn: '30d',
  };

  return jwt.sign(string, process.env.JWT_SECRET || '', option);
};

export const verify = (token: string) => {
  try {
    console.log({ decodeToken: token });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
    return decoded;
  } catch (e) {
    return false;
  }
};
