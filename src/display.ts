/**
 * This file is just an example.
 * You can delete it!
 */

import { data, give, MCFunction, Selector, tellraw } from 'sandstone'

// TODO: This function isn't ending up in the result :concern:
MCFunction('display_message', () => {
  tellraw('@a', [
    '\n========= Congratulations! =========\n\n',
    { text: ' Sandstone', color: 'gold', bold: true }, ' is ', { text: 'successfully installed.\n\n', color: 'green' },
    ' Add files to the ', { text: 'src', underlined: true }, ' folder\n',
    ' and start creating your datapack!\n',
    '==============', { text: '🏹', color: '#D2691E' }, { text: '⚔', color: '#45ACA5' }, { text: '⛏', color: '#FFD700' }, '==============',
  ])

  give('@s', 'acacia_boat')

  data.modify.entity(Selector('@a'), '{}')
}, {
  runOnLoad: true
})