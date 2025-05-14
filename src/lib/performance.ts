
/**
 * Simple performance monitoring utility
 */

export const measurePerformance = (name: string, fn: () => any) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  return result;
};

export const logRender = (componentName: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Render] ${componentName} at ${new Date().toLocaleTimeString()}`);
  }
};
