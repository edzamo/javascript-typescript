import { type } from "os";

export type SizeType = 'S' | 'M' | 'L' | 'XL';

export type product = {
    title: string, createAt: Date, stock: number, size?: SizeType
}
