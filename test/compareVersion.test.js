import test from 'ava'
import { compareVersion } from '../client/src/utils/compareVersion'

test('compare version', (t) => {
  t.is(compareVersion('0.6.2', '0.7.0'), false)
  t.is(compareVersion('0.7.2', '0.7.0'), true)
})
