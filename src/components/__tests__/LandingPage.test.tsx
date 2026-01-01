import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('../ui/button', () => ({
  Button: ({ children, asChild, ...props }: any) => {
    if (asChild) return children as any;
    return <button {...props}>{children}</button>;
  }
}));

jest.mock('lucide-react', () => ({
  Check: (props: any) => <svg {...props} />, 
  ChevronDown: (props: any) => <svg {...props} />, 
  Shield: (props: any) => <svg {...props} />, 
  Lock: (props: any) => <svg {...props} />, 
  Building2: (props: any) => <svg {...props} />, 
  TrendingUp: (props: any) => <svg {...props} />, 
  FileText: (props: any) => <svg {...props} />, 
  BarChart3: (props: any) => <svg {...props} />, 
  Zap: (props: any) => <svg {...props} />, 
  Database: (props: any) => <svg {...props} />, 
  Globe: (props: any) => <svg {...props} />, 
  Clock: (props: any) => <svg {...props} />, 
  AlertCircle: (props: any) => <svg {...props} />, 
  Target: (props: any) => <svg {...props} />, 
  DollarSign: (props: any) => <svg {...props} />, 
  Calendar: (props: any) => <svg {...props} />, 
  Users: (props: any) => <svg {...props} />, 
  Star: (props: any) => <svg {...props} />
}));

jest.mock('../ui/card', () => ({
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardContent: ({ children, ...props }: any) => <div {...props}>{children}</div>
}));

jest.mock('../../lib/base-url', () => ({ baseUrl: '' }));

import LandingPage from '../LandingPageNew';

describe('LandingPage', () => {
  beforeEach(() => {
    localStorage.clear();
    // ensure history.replaceState exists
    if (!window.history.replaceState) {
      // @ts-ignore
      window.history.replaceState = () => {};
    }
  });

  test('FAQ accordion toggles content and exposes ARIA attributes', () => {
    render(<LandingPage />);

    const faqButton = screen.getByRole('button', { name: /Is my financial data secure\?/i });
    expect(faqButton).toBeInTheDocument();
    expect(faqButton).toHaveAttribute('aria-expanded', 'false');

    // open
    fireEvent.click(faqButton);
    expect(faqButton).toHaveAttribute('aria-expanded', 'true');

    const faqRegion = screen.getByRole('region', { name: /Is my financial data secure\?/i });
    expect(faqRegion).toBeInTheDocument();
    expect(faqRegion).toHaveTextContent(/All data is encrypted and stored on Swiss servers/i);

    // close
    fireEvent.click(faqButton);
    expect(faqButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText(/All data is encrypted and stored on Swiss servers/i)).toBeNull();
  });

  test('Language switcher updates language and persists to localStorage', () => {
    const { container } = render(<LandingPage />);

    const enLink = screen.getByText('EN');
    expect(enLink).toBeInTheDocument();

    fireEvent.click(enLink);

    expect(localStorage.getItem('sfa_lang')).toBe('en');

    const rootDiv = container.querySelector('div[lang="en"]');
    expect(rootDiv).not.toBeNull();
  });
});
