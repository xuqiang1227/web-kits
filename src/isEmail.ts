
export const isEmail = (email: string) => {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
}