import { TextureNode } from "../../../nodes/Nodes";

export class NodeSampledTexture extends SampledTexture {
	access: 'read-write' | 'read-only' | 'write-only';
	textureNode: TextureNode

	get needsBindingsUpdate(): boolean;

}