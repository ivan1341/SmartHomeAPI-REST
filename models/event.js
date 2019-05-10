import { schema, model } from 'mongoose';

var eventSchema = new schema({
  sensor:{
      type:String
  },
  time:{
      type:Date,
      default: Date.now
  },
  value:{
      type:String
  }
})

export default model('events', eventSchema, 'events');