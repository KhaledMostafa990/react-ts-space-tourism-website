import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import data from '../src/data/data.json';

function renderWithRouter(ui: any, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
    userevent: userEvent,
  };
}

async function visit(path: string | RegExp, e: any) {
  if (typeof path !== 'string') {
    await e.click(screen.getByText(path));
  } else {
    await e.click(screen.getByText(`${path}`));
  }
}

function lazyExpect(value: string | RegExp) {
  setTimeout(() => {
    if (typeof value !== 'string') {
      expect(screen.getByText(`${value}`));
    } else {
      expect(screen.getByText(value));
    }
  }, 1000);
}

describe('The App Pages/Routers', () => {
  test('rendring avaiable pages', async () => {
    let { userevent } = renderWithRouter(<App />);

    visit(/destinations/, userevent);
    lazyExpect(/pick your destinations/i);

    visit(/crew/, userevent);
    lazyExpect(/welcome to crew/i);

    visit('technology', userevent);
    lazyExpect(/welcome to technology/i);

    visit('home', userevent);
    expect(screen.getByText(/so, you want to travel to/)).toBeInTheDocument();

    visit(/design system/i, userevent);
    expect(screen.getByText(/design system/)).toBeInTheDocument();
  });

  test('landing on not existing page', () => {
    renderWithRouter(<App />, { route: '/some/bad/route' });
    expect(screen.getByText(/Not Found/gi)).toBeInTheDocument();
  });
});

Object.keys(data).forEach((contentName: string) => {
  const current = data[contentName as keyof typeof data];

  describe(`${contentName} page`, () => {
    test('The page heading', () => {
      renderWithRouter(<App />, { route: `/${contentName}` });
      expect(
        screen.getByRole('heading', {
          level: 1,
          name: new RegExp(`${current[0].pageTitle}`, 'i'),
        })
      ).toBeInTheDocument();
    });

    current.forEach(({ name }) => {
      test('The page tabs are exist', () => {
        renderWithRouter(<App />, { route: `/${contentName}` });

        expect(screen.getByTestId(`${name} content tab`)).toBeInTheDocument();
      });
    });

    describe('The tabs content data', () => {
      current.forEach(async (content: any) => {
        const description = content.bio || content.description;

        test('Tabs on navigation and its realated content', async () => {
          const { userevent } = renderWithRouter(<App />, {
            route: `/${contentName}`,
          });

          await userevent.click(
            screen.getByTestId(`${content.name} content tab`)
          );

          expect(screen.getByText(`${description}`)).toBeInTheDocument();
        });
      });
    });
  });
});
