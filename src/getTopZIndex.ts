export const getTopZIndex = (className: string): number => {

  const dialogZIndexes = Array.from(document.querySelectorAll(className))
    .map((d: any) => Number(d.style.zIndex || 0)) as any;
  const maxZIndex = Math.max(...[100].concat(dialogZIndexes) as any);

  return maxZIndex;
}