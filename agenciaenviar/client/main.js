import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/banco.js';
console.log(bdEnviar.find().count());
import '../imports/banco.js';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.body.helpers({
usuario: function(){
           return console.log(Meteor.user());
    
    },
});

Template.janela_cadastro.events({
    'submit #id_form_cadastro': function(event){
			//bdEnviar.insert({nome: '$nome', celular: '$celular', email: 'email', created: new Date()}); 
        bdEnviar.insert({nome: $("#id_nome").val(), celular: $("#id_celular").val(), email: $("#id_email").val(), created: new Date()});
   		 },
	});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
