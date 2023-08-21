const amqp = require("amqplib");

async function consumeMessages() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  // Assert the fanout exchange named "users"
  await channel.assertExchange("users", "fanout");


  const infoQueue = await channel.assertQueue("", {
    exclusive: true,
    autoDelete: true,
  });

  // Bind the queue to the fanout exchange
  await channel.bindQueue(infoQueue.queue, "users", "");


  channel.consume(infoQueue.queue, (msg) => {
    const data = JSON.parse(msg.content);
    console.log(data);
    channel.ack(msg);
  });
}

consumeMessages();
