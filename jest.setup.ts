import '@testing-library/jest-dom';
import 'jest-canvas-mock';

// ResizeObserver のモック
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;