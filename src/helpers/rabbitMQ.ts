import { type Connection, type Channel, connect, type ConsumeMessage } from 'amqplib'

class RabbitMqServer {
  private conn!: Connection
  private channel!: Channel

  constructor (private uri: string) { }

  async start (): Promise<void> {
    this.conn = await connect(this.uri)
    this.channel = await this.conn.createChannel()
  }

  async publishInQueue (queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message))
  }

  async consumeQueue (queue: string, callback: (message: ConsumeMessage) => void) {
    return await this.channel.consume(queue, (message) => {
      if (message !== null) {
        callback(message)
        this.channel.ack(message)
      }
    })
  }
}

export { RabbitMqServer }
