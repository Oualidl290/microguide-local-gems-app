
import React from 'react';
import MicroGuideDesignSystem from '@/design-system/MicroGuideDesignSystem';
import { ThemeProvider } from '@/components/theme-provider';

const DesignSystemPage = () => {
  return (
    <ThemeProvider>
      <MicroGuideDesignSystem />
    </ThemeProvider>
  );
};

export default DesignSystemPage;
