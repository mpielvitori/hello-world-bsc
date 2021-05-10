const HelloWorld = artifacts.require('HelloWorld');
const config = require('config');

contract('HelloWorld', () => {
  it('should send message successfully', async () => {
    console.log('MN ', config.networks.bscTestnet.account.mnemonic);
    console.log('MN ', config.networks);
    // Given
    const newMessage = 'Hello world!!!';
    const helloWorldInstance = await HelloWorld.deployed();

    // When
    await helloWorldInstance.setMessage(newMessage);

    // Then
    const currentMessage = await helloWorldInstance.message.call();
    assert.strictEqual(newMessage, currentMessage);
  });
});
