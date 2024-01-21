export function fizzbuzz(n: number): string[] {
  const fizzbuzzList: string[] = [];
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i !== 0) {
      fizzbuzzList.push("fizz");
    } else {
      fizzbuzzList.push(i.toString());
    }
  }
  return fizzbuzzList;
}
