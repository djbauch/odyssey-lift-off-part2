import React from 'react';
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import { InMemoryCache } from '@apollo/client';
import { renderApollo, cleanup, waitForElement } from '../../utils/test-utils';
import Tracks, { TRACKS } from '../tracks';

const mockTrack = {
  id: 'c_0',
  title: 'Nap, the hard way',
  thumbnail:
    'https://images.unsplash.com/photo-1542403810-74c578300013?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
  length: 1420,
  modulesCount: 6,
  author: {
    name: 'Cheshire Cat',
    photo:
      'https://images.unsplash.com/photo-1593627010886-d34828365da7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
  },
};

describe('Tracks Page', () => {
  afterEach(cleanup);
  const cache = new InMemoryCache({ addTypename: false });

  it('renders tracks', async () => {
    const mocks = [
      {
        request: { query: TRACKS },
        result: {
          data: {
            tracksForHome: [mockTrack],
          },
        },
      },
    ];

    const { getByText } = await renderApollo(<Tracks />, {
      mocks,
      cache,
    });

    // eslint-disable-next-line testing-library/prefer-find-by, testing-library/prefer-screen-queries
    await waitForElement(() => getByText(/nap, the hard way/i));
  });
});
