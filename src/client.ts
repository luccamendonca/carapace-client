const { CommandRequest } = require('./proto/carapace_command_pb');
const { CarapaceCommandPromiseClient } = require('./proto/carapace_command_grpc_web_pb');

export function sendGrpcCommand(command: string, args: string = '') {
  const serverAddress = process.env.REACT_APP_CARAPACE_SERVER_ADDRESS;
  const client = new CarapaceCommandPromiseClient(serverAddress, null, null);
  const request = new CommandRequest().setCommand(command).setArgs(args);
  return client.sendCommand(request, {});
}
