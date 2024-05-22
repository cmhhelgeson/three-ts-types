import { StorageBufferNode } from "../../../nodes/Nodes";
import StorageBuffer from "../StorageBuffer";

export default class NodeStorageBuffer extends StorageBuffer {
	nodeUniform: StorageBufferNode | null;
	access: GPUBufferBindingType;

	constructor( nodeUniform: StorageBufferNode | null );
	
}