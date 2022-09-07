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

describe('The App Pages/Routers', () => {
  test('rendring avaiable pages', async () => {
    let { userevent } = renderWithRouter(<App />);

    const designPage = screen.getByRole('link', { name: /design system/i });
    const homePage = screen.getByRole('link', { name: /home/i });
    const destinationsPage = screen.getByRole('link', {
      name: /destinations/i,
    });
    const crewPage = screen.getByRole('link', { name: /crew/i });
    const technologyPage = screen.getByRole('link', {
      name: /technology/i,
    });

    await userevent.click(designPage);
    expect(screen.getByText(/welcome to design system/i)).toBeInTheDocument();

    await userevent.click(homePage);
    expect(screen.getByText(/welcome to home/gi)).toBeInTheDocument();

    await userevent.click(screen.getByText(/destinations/i));
    await userevent.click(destinationsPage);
    expect(screen.getByText(/welcome to destinations/i)).toBeInTheDocument();

    await userevent.click(crewPage);
    expect(screen.getByText(/welcome to crew/gi)).toBeInTheDocument();

    await userevent.click(technologyPage);
    expect(screen.getByText(/welcome to technology/gi)).toBeInTheDocument();
  });

  test('landing on not existing page', () => {
    renderWithRouter(<App />, { route: '/some/bad/route' });
    expect(screen.getByText(/Not Found/gi)).toBeInTheDocument();
  });
});
