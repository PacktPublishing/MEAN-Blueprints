export function serializeQuery(query): string {
  var chunks = [];
  for(var key in query)
    if (query.hasOwnProperty(key)) {
      let k = encodeURIComponent(key);
      let v = encodeURIComponent(query[key]);
      chunks.push(`${k}=${v}`);
    }
  return chunks.join('&');
}
