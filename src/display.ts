/**
 * This file is just an example.
 * You can delete it!
 */

import { MCFunction, tellraw } from 'sandstone'

export const displayMessage = () => MCFunction('template:display_message', () => {
  tellraw('@a', [
    '\n========= Congratulations! =========\n\n',
    { text: ' Sandstone template library', color: 'gold', bold: true }, ' is ', { text: 'successfully installed.\n\n', color: 'green' },
    '==============', { text: '🏹', color: '#D2691E' }, { text: '⚔', color: '#45ACA5' }, { text: '⛏', color: '#FFD700' }, '==============',
  ])
}, {
  runOnLoad: true
})