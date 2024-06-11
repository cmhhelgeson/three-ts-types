import { NodeAttribute, NodeUniform } from "../../../nodes/Nodes";


type NodeRenderResource =
	NodeUniform | 

export default class NodeBuilderState {

	constructor(
		vertexShader: string,
		fragmentShader: string,
		computeShader: string,
		nodeAttributes: NodeAttribute[],
		bindings:
		

		updateNodes: Node[],
		updateBeforeNodes: Node[],
		updateAfterNodes: Node[]

	)



}