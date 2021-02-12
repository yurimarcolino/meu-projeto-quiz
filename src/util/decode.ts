export function decode (string: string) {
  return string.replace(
    /&#(?:x([\da-f]+)|(\d+));/ig,
    function (_, hex, dec) {
      return String.fromCharCode(dec || +('0x' + hex))
    }
  )
}
