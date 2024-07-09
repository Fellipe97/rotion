import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async (_, params) => {
  console.log('Params: ', params)

  return 'Hello, world!'
})

/* ipcMain.on('fetch-documents', (event, params) => {
  console.log('Params: ', params)
}) */
