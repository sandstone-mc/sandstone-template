/**
 * This file is just an example.
 * You can delete it!
 */

import { MCFunction, tellraw } from 'sandstone'

const foo = MCFunction('display_message', () => {
  tellraw('@a', [
    '\n========= Congratulations! =========\n\n',
    { text: ' Sandstone', color: 'gold', bold: true }, ' is ', { text: 'successfully installed.\n\n', color: 'green' },
    ' Add files to the ', { text: 'src', underlined: true }, ' folder\n',
    ' and start creating your datapack!\n',
    '==============', { text: '🏹', color: '#D2691E' }, { text: '⚔', color: '#45ACA5' }, { text: '⛏', color: '#FFD700' }, '==============',
  ])
}, {
  runOnLoad: true
})

console.log('Imported Context:')

foo['core'].resourceNodes.forEach((node: any) => {
  if (node.resource.creator === 'user') console.log(node.resource.path)
})