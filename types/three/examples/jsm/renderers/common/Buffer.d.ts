import Binding from "./Binding";

export default class Buffer extends Binding {
	readonly isBuffer: true;
	bytesPerElement: number;
	_buffer: Float32Array | null;

	constructor(name: string, buffer: Float32Array | null);

	get byteLength(): number;
	get buffer(): ArrayBuffer;
	update(): true;

}