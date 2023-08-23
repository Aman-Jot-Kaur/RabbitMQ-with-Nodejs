const amqp = require("amqplib");
const config = require("./config");





class Producer {
  channel;

  async createChannel() {
    
// Connect to the rabbitmq server
    const connection = await amqp.connect(config.rabbitMQ.url);
    this.channel = await connection.createChannel();
    //Create a new channel on that connection
  }

  async publishMessage(routingKey, message) {
    if (!this.channel) {
      await this.createChannel();
    }

    const exchangeName = config.rabbitMQ.exchangeName;
    // Create the exchange
  await channel.assertExchange(exchangeName, 'fanout', {
    durable:true,
  });

    const logDetails = {
      
      message: message,
      dateTime: new Date(),
    };
    //Publish the message as fanout
    await this.channel.publish(exchangeName, '', Buffer.from(JSON.stringify(logDetails)));
  

    console.log(
      `message sent`
    );
  }
}

module.exports = Producer;