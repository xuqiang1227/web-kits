/**
 * @param url 
 * @param ignoreProtocol 
 */
export const isWebSite = (url: string, ignoreProtocol?: boolean) => {
  if (!!ignoreProtocol) {
    return /[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/.test(url);
  }
  return /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/.test(url);
}