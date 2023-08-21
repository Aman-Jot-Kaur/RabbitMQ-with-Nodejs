const amqp = require("amqplib");
const config = require("./config");

//step 1 : Connect to the rabbitmq server
//step 2 : Create a new channel on that connection
//step 3 : Create the exchange
//step 4 : Publish the message as fanout

class Producer {
  channel;

  async createChannel() {
    const connection = await amqp.connect(config.rabbitMQ.url);
    this.channel = await connection.createChannel();
  }

  async publishMessage(routingKey, message) {
    if (!this.channel) {
      await this.createChannel();
    }

    const exchangeName = config.rabbitMQ.exchangeName;
    
  await channel.assertExchange(exchangeName, 'fanout', {
    durable:true,
  });

    const logDetails = {
      
      message: message,
      dateTime: new Date(),
    };
    await this.channel.publish(exchangeName, '', Buffer.from(JSON.stringify(logDetails)));
  

    console.log(
      `message sent`
    );
  }
}

module.exports = Producer;