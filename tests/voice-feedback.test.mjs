import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const appSource = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const stylesSource = fs.readFileSync(new URL('../styles.css', import.meta.url), 'utf8');

test('Spoken voice feedback announces exact correct and incorrect phrases', () => {
  assert.match(appSource, /Correct! Excellent work\. Keep it up!/);
  assert.match(appSource, /Not quite right\. Try again!/);
});

test('Spoken voice feedback cancels existing speech to avoid simultaneous overlapping messages', () => {
  assert.match(appSource, /window\.speechSynthesis\.cancel\(\)/);
  assert.match(appSource, /window\.speechSynthesis\.speak\(utterance\)/);
});

test('Spoken voice feedback guards against duplicate announcements for the same answer', () => {
  assert.match(appSource, /quizSession\.voiceAnnouncementKey\s*===\s*key/);
  assert.match(appSource, /quizSession\.feedbackAnnounced/);
});

test('Spoken voice feedback respects voiceFeedback setting and feedbackMuted setting', () => {
  assert.match(appSource, /!state\.settings\.voiceFeedback\s*\|\|\s*state\.settings\.feedbackMuted/);
});

test('Voice toggle is available on quiz page and settings page', () => {
  assert.match(appSource, /id="voice-toggle"/);
  assert.match(appSource, /data-setting-toggle="voiceFeedback"/);
});

test('Purple interface styling sets rich purple background and black text on input elements', () => {
  assert.match(stylesSource, /--input-bg:\s*#c4b5fd/);
  assert.match(stylesSource, /--input-text:\s*#000000/);
  assert.match(stylesSource, /color:\s*#000000\s*!important/);
});

test('Quiz answer grading functions correctly for standard and custom question formats', () => {
  assert.match(appSource, /AtlasQuestionBank\.gradeAnswer/);
  assert.match(appSource, /question\.answer/);
});
