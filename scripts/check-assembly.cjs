const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
const sharp = require('sharp');
const compiled = ts.transpileModule(fs.readFileSync('src/components/experience/motion.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const context = { exports: {} };
vm.runInNewContext(compiled, context);
const { layers, layerFrame, progressBetween } = context.exports;

(async () => {
  for (const layer of layers) {
    assert.equal(layerFrame(0, layer).opacity, 0);
    assert.equal(layerFrame(1, layer).opacity, 1);
    assert.equal(layerFrame(1, layer).transform, 'translate3d(0%, 0%, 0) rotate(0deg) scale(1)');
    let previous = 0;
    for (let frame = 0; frame <= 1000; frame++) {
      const value = layerFrame(frame / 1000, layer).opacity;
      assert.ok(Number.isFinite(value) && value >= previous && value <= 1);
      previous = value;
    }
    for (const width of [768, 1536]) {
      const image = sharp(`public/experience/${layer.name}-${width}.webp`);
      assert.equal((await image.metadata()).hasAlpha, true, `${layer.name} needs real transparency`);
      const alpha = (await image.stats()).channels[3];
      assert.equal(alpha.min, 0);
      assert.ok(alpha.max > 240);
    }
  }
  assert.equal(progressBetween(-1, 0.84, 0.98), 0);
  assert.equal(progressBetween(2, 0.84, 0.98), 1);
  assert.equal(progressBetween(0.91, 0.84, 0.98).toFixed(2), '0.50');
  console.log('PASS: assembly endpoints, monotonic fades, final photo transition and alpha assets.');
})().catch(error => { console.error(error); process.exitCode = 1; });
