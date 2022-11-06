const { CommandRequest } = require('./proto/carapace_command_pb');
const { CarapaceCommandPromiseClient } = require('./proto/carapace_command_grpc_web_pb');

export type Cmd = {
  command: string,
  args?: string,
}

export function sendCmd(c: Cmd) {
  const serverAddress = process.env.REACT_APP_CARAPACE_SERVER_ADDRESS;
  const client = new CarapaceCommandPromiseClient(serverAddress, null, null);
  const request = new CommandRequest().setCommand(c.command).setArgs(c.args);
  return client.sendCommand(request, {});
}
