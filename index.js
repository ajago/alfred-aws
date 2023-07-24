const amazonServices = ["ec2", "lambda", "dynamodb", "sns", "sqs"];
	
const makeListEntry = entry => ({
	uuid: entry,
	title: entry,
	arg: `https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/${entry}/`,
	subtitle: `https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/${entry}/`
})

function run(argv) {
	const items = amazonServices.map(makeListEntry)
	return JSON.stringify({ items });
}
