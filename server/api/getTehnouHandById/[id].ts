export default defineEventHandler(async (event) => {
  // const fileName = '2011010111gm-00a9-0000-72da92c45' + '.json'
  const fileName = getRouterParam(event, 'id') + '.json'
  const data = await useStorage('assets:server').getItem<object>(`data/` + fileName)
  return {
    fileName: fileName,
    tenhouHand: data
  };
})