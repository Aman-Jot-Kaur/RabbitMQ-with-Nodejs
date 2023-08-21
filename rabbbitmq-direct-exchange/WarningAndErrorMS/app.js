const amqp=require("amqplib")

async function consumeMessages(){
const connection=await(amqp.connect("amqp://localhost"));
const channel=await connection.createChannel();
await channel.assertExchange("logExchange","direct");

const infoque= await channel.assertQueue("WarningandErrorQueue");

await channel.bindQueue(infoque.queue,"logExchange","Warning");//3rd parameter is a pattern for routing key which is a string 
await channel.bindQueue(infoque.queue,"logExchange","Error");//3rd parameter is a pattern for routing key which is a string 

channel.consume(infoque.queue,(msg)=>{
    const data=JSON.parse(msg.content)
    console.log(data)
    channel.ack(msg)
})
}

consumeMessages();