import { Texture } from "three";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject, TextureNode } from "../Nodes";

import { vec4 } from "../Nodes";


type StorageTextureNodeAccess = 
	'read-only' | 
	'read-write' |
	'write-only';

export default class StorageTextureNode extends TextureNode {
	
	readonly isStorageTextureNode: true;
	access: StorageTextureNodeAccess;
	storeNode?: NodeRepresentation;

	setAccess(access: StorageTextureNodeAccess);

	constructor(value: Texture, uvNode?: ShaderNodeObject<Node>, storeNode?: NodeRepresentation);

}

export const storageTexture: (
	value: Texture,
	uvNode?: ShaderNodeObject<Node>,
	storeNode?: NodeRepresentation
) => ShaderNodeObject<StorageTextureNode>;

export const storageTextureReadOnly: (
	value: Texture,
	uvNode?: ShaderNodeObject<Node>,
	storeNode?: NodeRepresentation,
) => ShaderNodeObject<StorageTextureNode>;

export const storageTextureReadWrite: (
	value: Texture,
	uvNode?: ShaderNodeObject<Node>,
	storeNode?: NodeRepresentation
) => ShaderNodeObject<StorageTextureNode>;