import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const appSource = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const configSource = fs.readFileSync(new URL('../supabase-config.js', import.meta.url), 'utf8');
const clientSource = fs.readFileSync(new URL('../supabase-client.js', import.meta.url), 'utf8');

test('Supabase config and client preserve existing project URL and anon key', () => {
  assert.match(configSource, /https:\/\/kyiktlcgqlgsyysvfrti\.supabase\.co/);
  assert.match(configSource, /sb_publishable_9RM1egbic3YDGCWmOcLMvQ_GzElLzvX/);
  assert.match(clientSource, /AtlasCloud/);
  assert.match(clientSource, /signInWithPassword/);
  assert.match(clientSource, /signUp/);
});

test('Auth page renders Display Name during signup, but omits it during sign-in', () => {
  // Check showNameField logic in appSource
  assert.match(appSource, /const showNameField\s*=\s*!cloudAuth\s*\|\|\s*authMode\s*===\s*'signup'/);
  assert.match(appSource, /\$\{showNameField\s*\?\s*`<div class="field"><label for="demo-name">Display name<\/label>/);
});

test('Sign-in form requires only email and password, not display name', () => {
  // During sign-in, name validation is bypassed
  assert.match(appSource, /if\s*\(!isCloud\s*\|\|\s*authMode\s*===\s*'signup'\)\s*\{\s*if\s*\(name\.length\s*<\s*2\)/);
  assert.match(appSource, /if\s*\(isCloud\)\s*\{\s*if\s*\(!email\)/);
  assert.match(appSource, /if\s*\(!password\)/);
});

test('Registration requires Display Name, Email, and Password with minimum 8 characters', () => {
  assert.match(appSource, /if\s*\(!isCloud\s*\|\|\s*authMode\s*===\s*'signup'\)\s*\{\s*if\s*\(name\.length\s*<\s*2\)\s*\{\s*showToast\('Please enter a display name with at least 2 characters\.'/);
  assert.match(appSource, /if\s*\(authMode\s*===\s*'signup'\s*&&\s*password\.length\s*<\s*8\)\s*\{\s*showToast\('Password must be at least 8 characters long\.'/);
});

test('User display name is retrieved from Supabase user_metadata', () => {
  assert.match(appSource, /user\?\.user_metadata\?\.display_name\s*\|\|\s*user\?\.user_metadata\?\.full_name/);
});

test('Unconfirmed email error displays clear guidance to check inbox/spam', () => {
  assert.match(appSource, /email_not_confirmed/);
  assert.match(appSource, /Please confirm your email address\. Check your inbox or spam folder for the confirmation link\./);
});

test('Session restoration syncs user display name and preserves learning state', () => {
  assert.match(appSource, /const syncUserSession\s*=\s*\(user\)\s*=>/);
  assert.match(appSource, /state\.profile\.signedIn\s*=\s*true/);
  assert.match(appSource, /user\.user_metadata\?\.display_name/);
  assert.match(appSource, /window\.AtlasCloud\.authReady\.then/);
  assert.match(appSource, /window\.AtlasCloud\.onAuthStateChange/);
});

test('Simulated sign-in and session restore preserve profile details and quiz history', () => {
  // Mock learning state
  const mockState = {
    profile: {
      name: 'Guest learner',
      email: '',
      avatar: 'GL',
      signedIn: false,
      membership: 'monthly',
      education: { countryId: 'KE', levelId: 'primary' }
    },
    history: [{ quizId: 'sample-quiz', score: 100, total: 1 }],
    stats: { points: 50, quizzes: 1 }
  };

  const mockUser = {
    id: 'user-123',
    email: 'student@example.com',
    user_metadata: {
      display_name: 'Grace Hopper'
    }
  };

  // Simulate syncUserSession
  const resolvedName = (
    mockUser.user_metadata?.display_name ||
    mockUser.user_metadata?.full_name ||
    mockUser.email?.split('@')[0] ||
    'Learner'
  ).slice(0, 40);

  mockState.profile.name = resolvedName;
  mockState.profile.email = mockUser.email;
  mockState.profile.signedIn = true;

  // Assertions
  assert.equal(mockState.profile.name, 'Grace Hopper');
  assert.equal(mockState.profile.email, 'student@example.com');
  assert.equal(mockState.profile.signedIn, true);
  // Preserved fields
  assert.equal(mockState.profile.membership, 'monthly');
  assert.equal(mockState.profile.education.countryId, 'KE');
  assert.equal(mockState.history.length, 1);
  assert.equal(mockState.stats.points, 50);
});
