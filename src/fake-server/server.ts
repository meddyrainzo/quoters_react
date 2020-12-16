import { rest } from 'msw';
import { setupServer } from 'msw/node';

import sampleQuotes from './sampleQuotes';

export const server = setupServer(
  rest.get('/quotes/:id', (req, res, ctx) => {
    return res(ctx.json(sampleQuotes[0]));
  })
);
