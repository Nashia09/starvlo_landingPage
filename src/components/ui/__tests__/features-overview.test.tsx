import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturesOverview from '../features-overview';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.ComponentProps<'h2'>) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: React.ComponentProps<'p'>) => <p {...props}>{children}</p>,
  },
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
  useInView: () => true,
}));

// Mock the FeatureCardScroll component
jest.mock('../../FeatureCardScroll', () => {
  return function MockFeatureCardScroll() {
    return <div data-testid="feature-card-scroll">Feature Cards</div>;
  };
});

describe('FeaturesOverview', () => {
  it('renders the main heading', () => {
    render(<FeaturesOverview />);
    
    const heading = screen.getByRole('heading', { 
      name: /everything you need to generate leads/i 
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<FeaturesOverview />);
    
    const description = screen.getByText(
      /our ai-powered platform provides all the tools you need/i
    );
    expect(description).toBeInTheDocument();
  });

  it('renders the feature card scroll component', () => {
    render(<FeaturesOverview />);
    
    const featureCardScroll = screen.getByTestId('feature-card-scroll');
    expect(featureCardScroll).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<FeaturesOverview />);
    
    const section = screen.getByRole('region', { name: /features/i });
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('has proper accessibility attributes', () => {
    render(<FeaturesOverview />);
    
    const heading = screen.getByRole('heading', { 
      name: /everything you need to generate leads/i 
    });
    expect(heading).toHaveAttribute('id', 'features-heading');
    
    const section = screen.getByLabelText(/features/i);
    expect(section).toHaveAttribute('aria-labelledby', 'features-heading');
  });
});
