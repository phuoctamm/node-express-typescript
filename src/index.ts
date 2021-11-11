import 'module-alias/register';
import express, {
  Application, Request, Response, NextFunction,
} from 'express';
import { config } from 'dotenv';
import { generate, verify } from '@/utils/jwt';

config();

const app: Application = express();
const port = process.env.PORT;

// Application routing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello world' });
});

app.get('/generate-token', (req: Request, res: Response) => {
  const token = generate('helloworld');
  res.status(200).send({
    data: 'hello world!',
    token,
  });
});

app.get('/decoded', (req: Request, res: Response) => {
  const token = req.query.token as string;
  const decoded = verify(token);

  res.status(200).send({
    decoded,
  });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
