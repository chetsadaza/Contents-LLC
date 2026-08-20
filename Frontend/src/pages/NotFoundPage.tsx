import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 text-center">
      <Container size="sm">
        <div className="w-20 h-20 rounded-3xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-extrabold text-3xl mx-auto mb-4 shadow-xs">
          404
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Page Not Found</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFoundPage;
