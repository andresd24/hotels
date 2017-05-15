import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    delete: function () {
      /* Borrado */
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('index');
    },
    update: function () {
      /* Seleccionamos la nota */
      var note_selected = this.get('model');
      /* Reescribimos */
      note_selected.save();
      this.transitionToRoute('index');
    }
  }
});
