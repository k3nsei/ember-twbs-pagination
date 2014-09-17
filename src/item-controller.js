var emberTwbsPaginationController = Ember.ObjectController.extend({
    isActive: function () {
        return this.get('content') == this.get('parentController.current');
    }.property('content', 'parentController.current'),

    isDots: function () {
        console.log('dupa_a');
        return this.get('content') === '…';
    }.property('content'),

    actions: {
        setCurrent: function () {
            this.set('parentController.current', this.get('content'));
        }
    }
});
