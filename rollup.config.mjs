import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { dts } from 'rollup-plugin-dts'
import JSON from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import alias from '@rollup/plugin-alias'
import vuePlugin from 'rollup-plugin-vue'
import ts from 'typescript'
import rollupPostcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import sass from 'sass'
import pxtorem from 'postcss-pxtorem'
import copy from 'rollup-plugin-copy'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import fse from 'fs-extra'
import path from 'path'

function getPlugins () {
  return [
    alias({
      entries: [{
        find: '@src',
        replacement: './src'
      },
      {
        find: '@type',
        replacement: './types'
      }
      ]
    }),
    vuePlugin(),
    typescript({
      exclude: 'node_modules/**',
      typescript: ts
    }),
    resolve(),
    commonjs(),
    nodePolyfills(),
    JSON(),
    rollupPostcss({
      extensions: ['.css', '.scss'],
      plugins: [
        autoprefixer(),
        cssnano(),
        pxtorem({
          rootValue: 14,
          propList: ['*']
        })
      ],
      use: [
        [
          'sass',
          {
            includePaths: ['./node_modules'],
            sass
          }
        ]
      ],
      extract: true
    }),
    copy({
      targets: [{
        src: 'src/assets/fonts',
        dest: 'lib/assets'
      },
      {
        src: 'src/assets/vue',
        dest: 'lib/assets'
      }
      ]
    })
  ]
}

function getExternal () {
  return ['vue']
}

function getGlobals () {
  return {
    vue: 'Vue'
  }
}

function genRollupConfig (module) {
  return {
    input: `./src/${module.input}`,
    output: [{
      exports: 'auto',
      format: 'umd',
      name: module.name,
      file: `lib/${module.output}`,
      globals: getGlobals()
    }],
    watch: {
      include: 'src/**'
    },
    plugins: getPlugins(),
    external: getExternal()
  }
}

function getCompoents () {
  const components = fse.readdirSync(path.resolve(__dirname, './src/components'))
  return components.map((component) => {
    return {
      name: component,
      input: `components/${component}/index.ts`,
      output: `components/${component}/index.js`
    }
  })
}

const moduleNames = getCompoents()
moduleNames.push({
  name: 'index',
  input: 'index.ts',
  output: 'index.js'
})

export default () => {
  const config = moduleNames.map((module) => {
    return genRollupConfig(module)
  })

  if (process.env.NODE_ENV === 'production') {
    config.forEach((val) => {
      val.plugins.push(
        terser({
          mangle: true,
          output: {
            comments: /@COMPILER_INJECT/i
          }
        })
      )
    })
    config.push({
      input: './src/index.ts',
      output: [{
        file: 'lib/types/index.d.ts',
        format: 'es'
      }],
      plugins: [dts()]
    })
  }

  return config
}
