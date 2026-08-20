import React from 'react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const points = [
    'Modular, clean, and highly maintainable architecture',
    'Pure React, TypeScript, and modern Tailwind CSS stack',
    'Full TypeScript type safety with strict path aliasing (@/*)',
    'Seamlessly scalable for enterprise production workloads',
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="md">
        <div className="space-y-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              About Contents LLC
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              We are a specialized AI engineering and enterprise technology consulting firm dedicated to building production-grade AI systems that create measurable business impact.
            </p>
          </div>

          <Card className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Core Engineering Standards
            </h2>
            <div className="space-y-2.5">
              {points.map((pt, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="pt-2">
            <Link to="/">
              <Button variant="primary" size="md">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
