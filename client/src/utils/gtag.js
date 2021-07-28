import { v4 as uuid } from 'uuid'

export function gtag() {
  const payload = new URLSearchParams({
    v: 1,
    cid: uuid(),
    tid: 'G-5V6ZKB3W8W',
    t: 'pageview',
  }).toString()

  return fetch('https://google-analytics.com/collect', {
    body: payload,
    method: 'POST',
  })
}
