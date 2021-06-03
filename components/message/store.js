const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if(filterUser !== null) {
    filter = { user: filterUser }; 
  }
  const messages = await Model.find(filter);
  return messages
}

async function updateText(id, message) {
  const foundmessage = await model.findOne({
    _id: id
  })

  foundmessage.message = message;
  const newMessage = await foundmessage.save()
  return newMessage;
}


function removeMessage(id) {
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
  //get
  // delete
};