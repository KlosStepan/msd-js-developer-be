import { promises as fs } from 'fs';
import * as path from 'path';

//Dummy function returning API version, for sure static / created during build
export function returnApiVersion(): any {
    return ({ version: 'v1.0', date: '20240802' });
}

export async function getData1(): Promise<unknown> {
    try {
        const data = await fs.readFile(path.resolve(__dirname, "./ukhsa-data1.json"), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Error reading file: ${error.message}`);
    }
}