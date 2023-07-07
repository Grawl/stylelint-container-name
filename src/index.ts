import {
	createDefaultRule,
	DefaultOptionMode,
	type DefaultRuleOptions,
} from 'stylelint-rule-creator'

type ContainerQueryRuleOptions = DefaultRuleOptions

const messages = {
	mustSpecifyContainerName: (selector: string) =>
		`must specify 'container-name' property at '${selector}'`,
	mustNotSpecifyContainerName: () => "must not specify 'container-name' property",
}

export default createDefaultRule<typeof messages, ContainerQueryRuleOptions>({
	ruleName: 'stylelint-container-name/container-name',
	messages,
	defaultOptions: {
		mode: DefaultOptionMode.REQUIRE,
	},
	ruleCallback: (report, messages, info) => {
		const { ruleOptions, root } = info
		const { mode } = ruleOptions
		switch (mode) {
			case DefaultOptionMode.REQUIRE: {
				root.nodes.forEach((node) => {
					const { type } = node
					if (type !== 'rule') return
					const { nodes } = node
					const props = nodes.map((childNode) =>
						childNode.type === 'decl' ? childNode.prop : null
					)
					if (props.includes('container-type') && !props.includes('container-name')) {
						report({
							message: messages.mustSpecifyContainerName(node.selector),
							node,
						})
					}
				})
				break
			}
			case DefaultOptionMode.BLOCK: {
				root.walkDecls((decl) => {
					const { prop } = decl
					if (prop !== 'container-name') return
					report({
						message: messages.mustNotSpecifyContainerName(),
						node: decl,
						word: prop,
					})
				})
				break
			}
			case DefaultOptionMode.OFF:
			default:
				break
		}
	},
})
