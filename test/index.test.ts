import { expect, test } from 'bun:test'

test('main', async () => {
  const CLI = Bun.spawn(['bun', 'dev:test-build'], {
    windowsHide: true,
    windowsVerbatimArguments: true,
  })

  await CLI.exited

  expect(await CLI.stdout.text()).toMatchSnapshot()
})