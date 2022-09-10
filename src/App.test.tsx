import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

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

describe('The App Pages/Routers', () => {
  test('rendring avaiable pages', async () => {
    let { userevent } = renderWithRouter(<App />);

    visit(/destinations/, userevent);
    expect(screen.getByText(/pick your destinations/i)).toBeInTheDocument();

    visit(/crew/, userevent);
    expect(screen.getByText(/welcome to crew/i)).toBeInTheDocument();

    visit('technology', userevent);
    expect(screen.getByText(/welcome to technology/i)).toBeInTheDocument();

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
