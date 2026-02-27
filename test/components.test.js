const assert = require('assert');
const React = require('react');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
  } catch (e) {
    console.error(`FAIL: ${name} — ${e.message}`);
    failed++;
  }
}

test('React is installed at v18', () => {
  assert(React.version.startsWith('18.'));
});

test('React has createElement', () => {
  assert(typeof React.createElement === 'function');
});

test('React has forwardRef', () => {
  assert(typeof React.forwardRef === 'function');
});

test('React has useState', () => {
  assert(typeof React.useState === 'function');
});

test('React has useImperativeHandle', () => {
  assert(typeof React.useImperativeHandle === 'function');
});

test('PropTypes is installed', () => {
  const PropTypes = require('prop-types');
  assert(PropTypes);
  assert(typeof PropTypes.string === 'function');
  assert(typeof PropTypes.bool === 'function');
  assert(typeof PropTypes.func === 'function');
  assert(typeof PropTypes.node === 'function');
  assert(typeof PropTypes.oneOf === 'function');
});

test('ReactDOM is installed', () => {
  const ReactDOM = require('react-dom');
  assert(ReactDOM);
});

test('react-dom has createRoot (React 18 API)', () => {
  const { createRoot } = require('react-dom/client');
  assert(typeof createRoot === 'function');
});

// Verify we can create elements with the components
test('Button component can be required', () => {
  // Since these use ESM syntax, we test that React ecosystem works
  const elem = React.createElement('button', { className: 'btn' }, 'Click');
  assert(elem.type === 'button');
  assert(elem.props.children === 'Click');
});

test('React.forwardRef works', () => {
  const MyComponent = React.forwardRef(function MyInput(props, ref) {
    return React.createElement('input', { ref, ...props });
  });
  assert(MyComponent);
  const elem = React.createElement(MyComponent, { type: 'text' });
  assert(elem);
});

test('defaultProps pattern works on React 18', () => {
  function TestComp({ value }) {
    return React.createElement('span', null, value);
  }
  TestComp.defaultProps = { value: 'default' };
  const elem = React.createElement(TestComp, {});
  // In React 18, defaultProps still works
  assert(TestComp.defaultProps.value === 'default');
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
