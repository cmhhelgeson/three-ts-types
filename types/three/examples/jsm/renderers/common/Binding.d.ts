export default class Binding {
	name: string;
	visibility: GPUShaderStage;

	constructor(name: string)

	setVisibility(visibility: GPUShaderStage);

	clone(): Binding;
}