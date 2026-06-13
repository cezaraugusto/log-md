import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import log from '../src/index';

const ansiPattern = new RegExp(`${String.fromCharCode(27)}\\[[0-9]+m`, 'g');
const stripAnsi = (s: string) => s.replace(ansiPattern, '');

let logged: string[];

beforeEach(() => {
  logged = [];
  vi.spyOn(console, 'log').mockImplementation((msg: string) => {
    logged.push(String(msg));
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('log', () => {
  it('renders bold markdown without the asterisks', () => {
    log('this is **important** text');
    const out = stripAnsi(logged.join('\n'));
    expect(out).toContain('important');
    expect(out).not.toContain('**');
  });

  it('renders italics without the underscores', () => {
    log('an _emphasized_ word');
    const out = stripAnsi(logged.join('\n'));
    expect(out).toContain('emphasized');
    expect(out).not.toContain('_emphasized_');
  });

  it('keeps heading text', () => {
    log('# Title here');
    const out = stripAnsi(logged.join('\n'));
    expect(out).toContain('Title here');
  });

  it('renders codespans', () => {
    log('run `npm install` first');
    const out = stripAnsi(logged.join('\n'));
    expect(out).toContain('npm install');
    expect(out).not.toContain('`');
  });

  it('adds a gutter when requested', () => {
    log('plain text', true);
    expect(logged[0].startsWith('\n')).toBe(true);
    expect(logged[0].endsWith('\n')).toBe(true);
  });

  it('does not add a gutter by default', () => {
    log('plain text');
    expect(logged[0].startsWith('\n')).toBe(false);
  });
});
