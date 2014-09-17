var emberTwbsPaginationComponent = Ember.Component.extend({
    tagName: 'ul',
    classNameBindings: ['pager:pager:pagination', 'isHidden:hidden', 'paginationSizeClass'],
    pager: false,
    hide: false,
    pagerNext: 'Next',
    pagerPrevious: 'Previous',
    paginationPrevious: '«',
    paginationNext: '»',
    countOut: 2,
    countIn: 2,
    firstPage: 1,
    current: 1,
    lastPage: Ember.computed.alias('count'),

    isHidden: function () {
        if (this.get('hide')) {
            return (this.get('count') === 1);
        }
        return false;
    }.property('hide', 'count'),

    currentPage: function () {
        return Number(this.get('current'));
    }.property('current'),

    paginationSizeClass: function () {
        var size = this.get('size'),
            pager = this.get('pager');

        return !pager && size && (size === 'lg' || size === 'sm') ? 'pagination-' + size : '';
    }.property('paginationSize'),

    isFirst: function () {
        return this.get('current') === this.get('firstPage');
    }.property('firstPage', 'current'),

    isLast: function () {
        return this.get('current') === this.get('lastPage');
    }.property('lastPage', 'current'),

    pages: function () {
        var count = this.get('count'),
            current = this.get('current'),
            countOut = this.get('countOut'),
            countIn = this.get('countIn'),
            result = [];

        // Beginning group of pages: n1...n2
        var n1 = 1;
        var n2 = Math.min(countOut, count);

        // Ending group of pages: n7...n8
        var n7 = Math.max(1, (count - countOut + 1));
        var n8 = count;

        // Middle group of pages: n4...n5
        var n4 = Math.max(n2 + 1, current - countIn);
        var n5 = Math.min(n7 - 1, current + countIn);
        var use_middle = (n5 >= n4);

        // Point n3 between n2 and n4
        var n3 = Math.floor((n2 + n4) / 2);
        var use_n3 = (use_middle && ((n4 - n2) > 1));

        // Point $n6 between $n5 and $n7
        var n6 = Math.floor((n5 + n7) / 2);
        var use_n6 = (use_middle && ((n7 - n5) > 1));

        var links = [];
        // Generate links data in accordance with calculated numbers
        if (count > 1) {
            for (i = n1; i <= n2; i++) {
                links[i] = i;
            }
            if (use_n3 === true) {
                links[n3] = '…';
            }
            for (i = n4; i <= n5; i++) {
                links[i] = i;
            }
            if (use_n6 === true) {
                links[n6] = '…';
            }
            for (i = n7; i <= n8; i++) {
                links[i] = i;
            }
        } else {
            result.push(1);
        }

        links.forEach(function(x, y) {
            // Double check to be sure
            if(y >= 1 && y <= count) {
                result.push(x);
            }
        });

        return result;
    }.property('count', 'current', 'countOut', 'countIn'),

    click: function (event) {
        // stop `#` from jumping to top of page
        event.preventDefault();
    },

    actions: {
        next: function () {
            if (!this.get('isLast')) {
                var current = this.get('current');
                this.set('current', parseInt(current, 10) + 1);
            }
        },

        previous: function () {
            if (!this.get('isFirst')) {
                var current = this.get('current');
                this.set('current', parseInt(current, 10) - 1);
            }
        }
    }
});
