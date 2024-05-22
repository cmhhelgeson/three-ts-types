import StorageBufferAttribute from "../../renderers/common/StorageBufferAttribute.js";
import StorageInstancedBufferAttribute from "../../renderers/common/StorageInstancedBufferAttribute.js";
import { NodeTypeOption } from "../core/constants.js";
import { NodeOrType, NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import StorageArrayElementNode from "../utils/StoargeArrayElementNode.js";
import BufferNode from "./BufferNode.js";

type StorageBufferAccessType = Omit<GPUBufferBindingType, 'uniform'>;

export default class StorageBufferNode extends BufferNode {
    readonly isStorageBufferNode: true;
    bufferObject: boolean;
    access: Omit<GPUBufferBindingType, 'uniform'>;

    constructor(
        value: StorageBufferAttribute | StorageInstancedBufferAttribute,
        bufferType: NodeTypeOption,
        bufferCount?: number,
    );

    element(indexNode: NodeRepresentation): ShaderNodeObject<StorageArrayElementNode>;

    setBufferObject(value: boolean): this;

    setAccess(value: StorageBufferAccessType): this;
}

export const storage: (
    value: StorageBufferAttribute | StorageInstancedBufferAttribute,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<StorageBufferNode>;
export const storageObject: (
    value: StorageBufferAttribute | StorageInstancedBufferAttribute,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<StorageBufferNode>;
