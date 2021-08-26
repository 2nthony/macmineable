import test from 'ava'
import { getHashrate } from '../client/src/util/mining'

const minerLog = `[2021-06-13 19:25:39.756]  miner    speed 10s/60s/15m 353.6 n/a n/a H/s max 359.0 H/s`

test('getHashrate', (t) => {
  t.is(getHashrate(minerLog), 353.6)
})
