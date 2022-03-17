import { ChildProcessWithoutNullStreams } from "child_process";

export default function openssl(
  params: string | string[] | Array<string | { name: string; buffer: Buffer }>,
  callback: (param1: undefined | any[], param2: undefined | any[]) => any
): ChildProcessWithoutNullStreams;
