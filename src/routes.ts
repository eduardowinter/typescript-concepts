import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = CreateUser({
    email: 'eduardo@gmail.com',
    password: '12345',
    techs: [ 
      'Node.js', 
      'ReactJS', 
      'React Native', 
      { title: 'Javascript', experience: 100 },
    ],
  });

  return response.json({ message: 'Hello World'});
}

