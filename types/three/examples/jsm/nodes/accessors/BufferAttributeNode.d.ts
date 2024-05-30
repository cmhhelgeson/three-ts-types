import { Usage } from "../../../../src/constants";
import StorageBufferAttribute from "../../renderers/common/StorageBufferAttribute";
import StorageInstancedBufferAttribute from "../../renderers/common/StorageInstancedBufferAttribute";
import { NodeTypeOption } from "../Nodes";
import InputNode from "../core/InputNode";



export default class BufferAttributeNode extends InputNode<
	StorageBufferAttribute | StorageInstancedBufferAttribute
> {
	readonly isBufferNode: true;
	
	attribute: StorageBufferAttribute | StorageInstancedBufferAttribute;
	bufferType: NodeTypeOption | null;
	bufferStride: number;
	bufferOffset: number;
	usage: Usage;
	instanced: boolean;

	constructor(
		value: StorageBufferAttribute | StorageInstancedBufferAttribute,
		bufferType: NodeTypeOption | null,
		bufferStride: number,
		bufferOffset: number,
	);

	setUsage(usage: Usage);
	
}