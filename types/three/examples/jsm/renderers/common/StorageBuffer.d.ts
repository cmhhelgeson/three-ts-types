import { BufferAttribute, TypedArray } from "three/src/Three.js";
import Buffer from "./Buffer";

export default class StorageBuffer extends Buffer {
	readonly isStorageBuffer: true;
	attribute: BufferAttribute | null;

	constructor(name: string, attribute: BufferAttribute | null);

}