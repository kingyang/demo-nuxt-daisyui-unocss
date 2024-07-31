// https://github.com/antfu/eslint-config
// https://github.com/antfu/eslint-flat-config-viewer
// npx eslint-flat-config-viewer
const antfu = require('@antfu/eslint-config').default

const isDev = process.env.NODE_ENV === 'development'
const ruleStatus = isDev ? 'warn' : 'off'
module.exports = antfu(
  {
    ignores: [
      'server/assets/units',
      'services/units',
      'services/image/codecs',
      'services/image/exif.ts',
      'services/pdf/qpdf/qpdf.js',
      'services/pdf/pdfcpu/wasm_exec.js',
      'services/pdf/mupdf/libmupdf.js',
      'services/program/json_typegen_wasm_bg.js',
      'components2/qrcodegen.ts',
      'public/js/',
    ],
  },
  {
    rules: {
      'import/order': 'off',
      'jsdoc/check-param-name': 'off',
      'jsdoc/check-param-names': 'off',
      'jsdoc/require-property-description': 'off',
      'jsdoc/require-returns-description': 'off',
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'perfectionist/sort-enums': 'off',
      'ts/method-signature-style': 'off',
      'unused-imports/no-unused-vars': ruleStatus,
      'vue/attributes-order': 'off',
      'vue/valid-attribute-name': 'off',
    },
  },
)
