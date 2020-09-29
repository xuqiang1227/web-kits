/**
 * get all of dom zIndex
 * @param className dom selector
 * @param zIndex your base zIndex.
 */

export const getMaxZIndex = (className: string, zIndex?: number): number => {

  if (!document.querySelectorAll(className)) {
    return zIndex || 0;
  }

  const dialogZIndexes = Array.from(document.querySelectorAll(className))
    .map((d: any) => Number(d.style.zIndex || 0)) as any;
  const maxZIndex = Math.max(...[zIndex || 0].concat(dialogZIndexes) as any);

  return maxZIndex;
}