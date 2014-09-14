Ember.Application.initializer({
    name: 'ember-twbs-pagination',

    initialize: function(container, application) {
        container.register('component:ember-twbs-pagination', emberTwbsPaginationComponent);
        container.register('controller:emberTwbsPagination', emberTwbsPaginationController);
        application.inject('component:ember-twbs-pagination', 'emberTwbsPagination', 'controller:emberTwbsPagination');
    }
});
