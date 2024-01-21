export function fizzbuzz(n: number): string[] {
  const fizzbuzzList: string[] = [];
  for (let i = 0; i <= n; i++) {
    fizzbuzzList.push(i.toString());
  }
  return fizzbuzzList;
}
