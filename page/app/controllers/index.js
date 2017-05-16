import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function () {
      var note = this.store.createRecord('note', {
        title: this.get('titulo'),
        content: this.get('contenido'),
        author: this.get('autor')
      });
      this.set('titulo', "creada");
      this.set('contenido', "");
      this.set('autor', "");
      note.save();
    }
  }
});
